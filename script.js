var data = JSON.parse(dataset);
var text_data = JSON.parse(result_data);

var questions = data.content;
var questions_count = questions.length;
var dimensions = {};
var current_question = 1;
var scores = [], percentages = [], values = {};

function loadQuestions() {
    document.getElementById("question").innerHTML = questions[0].question;
    document.getElementById("progress").innerHTML = current_question + "/" + questions_count;
    // Create new dimension object with max, value and name from Parameters
    for (var i = 0; i < data.parameters.length; i++) {
        dimensions[data.parameters[i]] = { max: 0, value: 0, name: data.parameters[i] };
    }
}

function answer(choice)
{
    if (choice <= 0 || choice > 5)
        return;

    // Update relevant dimensions
    var curr_question_dimensions = questions[current_question - 1].dimensions;
    for (var key in curr_question_dimensions) {
        dimensions[key].value += curr_question_dimensions[key] * choice;
        dimensions[key].max = Math.max(dimensions[key].max, Math.abs(dimensions[key].value));
    }

    // Update progress
    current_question++;
    if (current_question > questions_count) {
        showResults();
    } else {
        document.getElementById("question").innerHTML = questions[current_question - 1].question;
        document.getElementById("progress").innerHTML = current_question + "/" + questions_count;
    }
}

function getColor(score) {
    var red = Math.min(255, Math.max(0, 255 - (score * 2.55)));
    var green = Math.min(255, Math.max(0, score * 2.55));
    return `rgb(${red}, ${green}, 0)`;
}

function showResults()
{
    var result_html = "";
    for (var key in dimensions) {
        scores.push(dimensions[key].value * 100 / dimensions[key].max);
        values[dimensions[key].name] = scores[scores.length - 1];
        percentages.push((scores[scores.length - 1] + 100) / 2);
        var score = percentages[percentages.length - 1];
        var color = getColor(score);
        // Get appropriate text from result_data
        var text = text_data[dimensions[key].name];
        if (score < 20)
            text = text["sehr niedrig"];
        else if (score < 40)
            text = text["niedrig"];
        else if (score < 60)
            text = text["neutral"];
        else if (score < 80)
            text = text["hoch"];
        else
            text = text["sehr hoch"];

        result_html += "<div class='dimension'><h2>" + dimensions[key].name + " - " + score.toFixed(2) + "%</h2><div class='bar'><div class='progress' style='width: " + score + "%; background-color: " + color + ";'></div></div><p class='desc'>" + text + "</p></div>";
    }
    // Create pie chart data from percentages
    var chart_data = [];
    for (var i = 0; i < data.parameters.length; i++) {
        chart_data.push({ name: data.parameters[i], y: percentages[i], color: data.parameter_colors[i] });
    }

    console.log(values);

    document.getElementById("main").innerHTML = "<div id='result'>" + result_html + "</div> <div id='chart'><canvas id='doughnut'></canvas></div>";

    var ctx = document.getElementById('doughnut').getContext('2d');
    Chart.defaults.color = 'white';
    var doughnut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: chart_data.map(x => x.y),
                backgroundColor: chart_data.map(x => x.color)
            }],
            labels: chart_data.map(x => x.name)
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 16,
                        }
                    }
                },
            },
        },
    });


}