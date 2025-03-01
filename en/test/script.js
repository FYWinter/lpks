var data = JSON.parse(dataset);
var text_data = JSON.parse(result_data);

var questions = data.content;
var questions_count = questions.length;
var dimensions = {};
var current_question = 1;
var completed_count = 1;
var scores = [], percentages = [], values = {};

function loadQuestions() {
    document.getElementById("question").innerHTML = questions[0].question;
    document.getElementById("progress").innerHTML = completed_count + "/" + questions_count;
    // Create new dimension object with max, value and name from Parameters
    for (var i = 0; i < data.parameters.length; i++) {
        dimensions[data.parameters[i]] = { max: 0, value: 0, name: data.parameters[i] };
    }
    // Loop through all questions and add the max value of each dimension
    for (var i = 0; i < questions.length; i++) {
        var curr_question_dimensions = questions[i].dimensions;
        for (var key in curr_question_dimensions) {
            dimensions[key].max += Math.abs(curr_question_dimensions[key]);
        }
    }
}

function answer(choice)
{
    if (choice <= 0 || choice > 5)
        return;


    meta_gewichtung = 1.0;
    if (choice == 1)
    {
        choice = -1;
    }
    else if (choice == 2)
    {
        choice = -0.5;
        meta_gewichtung = 0.75;
    }
    else if (choice == 3)
    {
        choice = 0;
        meta_gewichtung = 0;
    }
    else if (choice == 4)
    {
        choice = 0.5;
        meta_gewichtung = 0.75;
    }
    else if (choice == 5)
    {
        choice = 1;
    }

    // Update relevant dimensions
    var curr_question_dimensions = questions[current_question - 1].dimensions;
    console.log("--------------\nQuestion: " + questions[current_question - 1].question);
    console.log("Choice: " + choice + " [Meta-Gewichtung: " + meta_gewichtung + "]");
    for (var key in curr_question_dimensions) {
        var org_gewicht = curr_question_dimensions[key];
        dimensions[key].max -= org_gewicht; // Remove original weight
        dimensions[key].max += Math.abs(org_gewicht * meta_gewichtung); // Add new weight

        var percent_before = dimensions[key].value * 100;
        dimensions[key].value += curr_question_dimensions[key] * choice;
        var percent_after = dimensions[key].value * 100 / dimensions[key].max;
        console.log(key + ": " + percent_before + " -> " + percent_after);
    }

    // Remove current question
    questions.splice(current_question - 1, 1);
    // New random question between 0 and questions.length
    current_question = Math.floor(Math.random() * questions.length) + 1;
    completed_count++;

    // Update progress
    if (completed_count > questions_count) {
        showResults();
    } else {
        document.getElementById("question").innerHTML = questions[current_question - 1].question;
        document.getElementById("progress").innerHTML = completed_count + "/" + questions_count;
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