dataset = `
{
    "name": "LPKS_Set1",
    "language": "de",
    "parameters": [
        "Belohnungssensitivität",
        "Selbstkontrolle",
        "Denkflexibilität",
        "Soziale Sensitivität",
        "Risikobereitschaft",
        "Emotionale Reaktivität",
        "Gewohnheitsbildung"
    ],
    "parameter_colors": [
        "#FF6384",
        "#36A2EB",
        "#FFCD56",
        "#FF9F40",
        "#0000FF",
        "#4B0082",
        "#4BC0C0"
    ],
    "content": [
        {
            "question": "Ich neige dazu, impulsiv Entscheidungen zu treffen.",
            "dimensions": { "Selbstkontrolle": -1.0, "Risikobereitschaft": 0.35 }
        },
        {
            "question": "Wenn ich eine Routine habe, fällt es mir schwer, sie zu ändern.",
            "dimensions": { "Denkflexibilität": -0.6, "Gewohnheitsbildung": 1.0 }
        },
        {
            "question": "Ich fühle mich oft unwohl in sozialen Situationen mit Fremden.",
            "dimensions": { "Soziale Sensitivität": -1.0, "Emotionale Reaktivität": 0.2 }
        },
        {
            "question": "Ich liebe es, Probleme auf unkonventionelle Weise zu lösen.",
            "dimensions": { "Denkflexibilität": 1.0 }
        },
        {
            "question": "Ich reagiere emotional stark auf positive oder negative Erlebnisse.",
            "dimensions": { "Emotionale Reaktivität": 1.0 }
        },
        {
            "question": "Ich bin bereit, meine Komfortzone zu verlassen, um meine Ziele zu erreichen.",
            "dimensions": { "Risikobereitschaft": 1.0, "Selbstkontrolle": 0.5 }
        },
        {
            "question": "Ich kann meine Belohnungswünsche gut kontrollieren, selbst wenn ich müde oder gestresst bin.",
            "dimensions": { "Selbstkontrolle": 1.0, "Belohnungssensitivität": -0.5 }
        },
        {
            "question": "Ich suche aktiv nach positiven sozialen Interaktionen.",
            "dimensions": { "Soziale Sensitivität": 1.0 }
        },
        {
            "question": "Ich neige dazu, Risiken zu vermeiden",
            "dimensions": { "Risikobereitschaft": -1.0 }
        },
        {
            "question": "Ich fühle mich unwohl, wenn sich meine Tagesabläufe oft ändern.",
            "dimensions": { "Gewohnheitsbildung": 1.0, "Denkflexibilität": -0.2 }
        }
    ]
}
`;



result_data = `
{
  "Belohnungssensitivität": {
    "sehr niedrig": "Belohnungen motivieren dich kaum, du handelst fast ausschließlich aus Prinzip oder Pflichtgefühl.",
    "niedrig": "Du lässt dich von Belohnungen nur wenig beeinflussen. Sie sind eher ein netter Nebeneffekt als eine Motivation.",
    "neutral": "Belohnungen sind für dich angenehm, aber nicht entscheidend.",
    "hoch": "Du bist empfänglich für Anreize und Anerkennung. Motivation durch Belohnung treibt dich an.",
    "sehr hoch": "Belohnungen sind extrem wichtig für dich – du strebst aktiv nach Erfolg und positiven Reizen."
  },
  "Denkflexibilität": {
    "sehr niedrig": "Du hältst stark an bekannten Methoden fest und meidest neue Ansätze. Veränderungen machen dich unsicher.",
    "niedrig": "Du bevorzugst klare Strukturen und Verlässlichkeit. Neue Ideen sind möglich, aber nur mit starker Begründung.",
    "neutral": "Du kannst flexibel denken, hast aber auch gerne bewährte Abläufe.",
    "hoch": "Du bist offen für neue Konzepte und kannst gut umdenken. Veränderung ist für dich eher aufregend als beängstigend.",
    "sehr hoch": "Du liebst kreative Prozesse und suchst aktiv nach neuen Ideen und Perspektiven. Routine langweilt dich schnell."
  },
  "Emotionale Reaktivität": {
    "sehr niedrig": "Du bist extrem emotional stabil und lässt dich kaum von äußeren Umständen beeinflussen.",
    "niedrig": "Du bleibst meistens ruhig, auch in stressigen Situationen. Emotionen spielen eine Rolle, aber dominieren dich nicht.",
    "neutral": "Du hast eine gesunde Balance zwischen emotionalen und rationalen Reaktionen.",
    "hoch": "Deine Emotionen sind stark ausgeprägt. Du kannst leicht begeistert sein, aber auch empfindlicher auf negative Einflüsse reagieren.",
    "sehr hoch": "Deine Emotionen sind sehr intensiv – du erlebst Freude, Trauer oder Ärger besonders stark. Stress kann dich stark belasten."
  },
  "Gewohnheitsbildung": {
    "sehr niedrig": "Du kannst kaum langfristige Gewohnheiten entwickeln und fühlst dich in ständiger Veränderung wohl.",
    "niedrig": "Routinen fallen dir schwer. Du kannst sie befolgen, wenn nötig, bevorzugst aber Spontaneität.",
    "neutral": "Du hast eine ausgewogene Mischung aus Routine und Flexibilität.",
    "hoch": "Du etablierst Gewohnheiten leicht und profitierst von festen Strukturen.",
    "sehr hoch": "Routinen sind für dich essenziell. Du verlässt dich stark auf feste Abläufe und kannst schwer davon abweichen."
  },
  "Risikobereitschaft": {
    "sehr niedrig": "Du vermeidest Risiken, selbst wenn sie geringe Folgen haben. Sicherheit geht für dich immer vor.",
    "niedrig": "Du bist vorsichtig und wägt Risiken genau ab, bevor du eine Entscheidung triffst.",
    "neutral": "Du kannst Risiken eingehen, wenn sie notwendig sind, bevorzugst aber sichere Wege.",
    "hoch": "Du bist risikobereit, solange die Chancen gut stehen. Herausforderungen reizen dich.",
    "sehr hoch": "Du suchst aktiv nach Risiken und liebst Herausforderungen. Risiken einzugehen macht dir Spaß."
  },
  "Selbstkontrolle": {
    "sehr niedrig": "Du bist sehr impulsiv und handelst oft spontan, ohne lange nachzudenken.",
    "niedrig": "Du neigst zu impulsiven Entscheidungen, kannst dich aber in wichtigen Momenten kontrollieren.",
    "neutral": "Du hast eine gute Balance zwischen Impulsivität und Kontrolle.",
    "hoch": "Du bist sehr diszipliniert und überlegst dir deine Handlungen sorgfältig.",
    "sehr hoch": "Du hast eine außergewöhnliche Selbstdisziplin und kannst deine Impulse fast immer unterdrücken."
  },
  "Soziale Sensitivität": {
    "sehr niedrig": "Du bist kaum von den Emotionen anderer betroffen und handelst eher rational.",
    "niedrig": "Du nimmst die Emotionen anderer wahr, bist aber nicht stark davon beeinflusst.",
    "neutral": "Du kannst dich in andere hineinversetzen, aber hältst eine gewisse Distanz.",
    "hoch": "Du bist empathisch und achtest stark auf zwischenmenschliche Dynamiken.",
    "sehr hoch": "Du bist extrem einfühlsam und empfindlich für die Gefühle anderer – Konflikte oder negative Stimmungen belasten dich stark."
  }
}
`;