dataset = `
{
    "name": "LPKS_Set1",
    "language": "en",
    "parameters": [
        "Reward Sensitivity",
        "Self-Control",
        "Cognitive Flexibility",
        "Social Sensitivity",
        "Risk Tolerance",
        "Emotional Reactivity",
        "Habit Formation"
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
            "question": "I tend to make impulsive decisions.",
            "dimensions": { "Self-Control": -1.0, "Risk Tolerance": 0.35 }
        },
        {
            "question": "When I have a routine, I find it hard to change it.",
            "dimensions": { "Cognitive Flexibility": -0.6, "Habit Formation": 1.0 }
        },
        {
            "question": "I often feel uncomfortable in social situations with strangers.",
            "dimensions": { "Social Sensitivity": -1.0, "Emotional Reactivity": 0.2 }
        },
        {
            "question": "I love solving problems in unconventional ways.",
            "dimensions": { "Cognitive Flexibility": 1.0 }
        },
        {
            "question": "I react emotionally strongly to positive or negative experiences.",
            "dimensions": { "Emotional Reactivity": 1.0 }
        },
        {
            "question": "I am willing to leave my comfort zone to achieve my goals.",
            "dimensions": { "Risk Tolerance": 1.0, "Self-Control": 0.1 }
        },
        {
            "question": "I can resist temptations well.",
            "dimensions": { "Self-Control": 1.0, "Reward Sensitivity": -0.15 }
        },
        {
            "question": "I actively seek positive social interactions.",
            "dimensions": { "Social Sensitivity": 1.0 }
        },
        {
            "question": "I tend to avoid risks.",
            "dimensions": { "Risk Tolerance": -1.0 }
        },
        {
            "question": "I feel uncomfortable when my daily routines change often.",
            "dimensions": { "Habit Formation": 1.0, "Cognitive Flexibility": -0.2 }
        },
        {
            "question": "I often need an external reward to motivate myself for a task.",
            "dimensions": { "Reward Sensitivity": 1.0, "Self-Control": -0.3 }
        },
        {
            "question": "I can easily empathize with the emotions of others.",
            "dimensions": { "Social Sensitivity": 1.0, "Emotional Reactivity": 0.4 }
        },
        {
            "question": "I prefer to work according to a fixed plan rather than acting spontaneously.",
            "dimensions": { "Cognitive Flexibility": -0.8, "Habit Formation": 0.9 }
        },
        {
            "question": "I find it exciting to try new and unknown things.",
            "dimensions": { "Risk Tolerance": 1.0, "Cognitive Flexibility": 0.7 }
        },
        {
            "question": "I quickly become restless or frustrated when things don't go according to plan.",
            "dimensions": { "Emotional Reactivity": 1.0, "Cognitive Flexibility": -0.5 }
        },
        {
            "question": "I tend to prioritize long-term goals over short-term pleasures.",
            "dimensions": { "Self-Control": 1.0, "Reward Sensitivity": -0.5 }
        },
        {
            "question": "I often overreact to small failures.",
            "dimensions": { "Emotional Reactivity": 1.0, "Self-Control": -0.4 }
        },
        {
            "question": "I can focus well on a single task without getting distracted.",
            "dimensions": { "Self-Control": 1.0, "Cognitive Flexibility": -0.3 }
        },
        {
            "question": "I find it important that each day has a certain structure.",
            "dimensions": { "Habit Formation": 1.0, "Cognitive Flexibility": -0.4 }
        },
        {
            "question": "I easily get carried away by my emotions, even if I don't want to.",
            "dimensions": { "Emotional Reactivity": 1.0, "Self-Control": -0.6 }
        }
    ]
}
`;



result_data = `
{
  "Reward Sensitivity": {
    "sehr niedrig": "Rewards hardly motivate you; you act almost exclusively out of principle or a sense of duty.",
    "niedrig": "You are only slightly influenced by rewards. They are more of a nice bonus than a motivation.",
    "neutral": "Rewards are pleasant for you, but not decisive.",
    "hoch": "You are receptive to incentives and recognition. Motivation through rewards drives you.",
    "sehr hoch": "Rewards are extremely important to you – you actively strive for success and positive stimuli."
  },
  "Cognitive Flexibility": {
    "sehr niedrig": "You strongly adhere to familiar methods and avoid new approaches. Changes make you insecure.",
    "niedrig": "You prefer clear structures and reliability. New ideas are possible, but only with strong justification.",
    "neutral": "You can think flexibly, but also like proven processes.",
    "hoch": "You are open to new concepts and can adapt well. Change is more exciting than frightening for you.",
    "sehr hoch": "You love creative processes and actively seek new ideas and perspectives. Routine quickly bores you."
  },
  "Emotional Reactivity": {
    "sehr niedrig": "You are extremely emotionally stable and hardly influenced by external circumstances.",
    "niedrig": "You usually remain calm, even in stressful situations. Emotions play a role, but do not dominate you.",
    "neutral": "You have a healthy balance between emotional and rational reactions.",
    "hoch": "Your emotions are strongly pronounced. You can be easily excited, but also more sensitive to negative influences.",
    "sehr hoch": "Your emotions are very intense – you experience joy, sadness, or anger particularly strongly. Stress can greatly affect you."
  },
  "Habit Formation": {
    "sehr niedrig": "You can hardly develop long-term habits and feel comfortable in constant change.",
    "niedrig": "Routines are difficult for you. You can follow them if necessary, but prefer spontaneity.",
    "neutral": "You have a balanced mix of routine and flexibility.",
    "hoch": "You easily establish habits and benefit from fixed structures.",
    "sehr hoch": "Routines are essential for you. You rely heavily on fixed processes and find it hard to deviate from them."
  },
  "Risk Tolerance": {
    "sehr niedrig": "You avoid risks, even if they have minor consequences. Safety always comes first for you.",
    "niedrig": "You are cautious and carefully weigh risks before making a decision.",
    "neutral": "You can take risks when necessary, but prefer safe paths.",
    "hoch": "You are willing to take risks as long as the odds are good. Challenges excite you.",
    "sehr hoch": "You actively seek risks and love challenges. Taking risks is fun for you."
  },
  "Self-Control": {
    "sehr niedrig": "You are very impulsive and often act spontaneously without much thought.",
    "niedrig": "You tend to make impulsive decisions but can control yourself in important moments.",
    "neutral": "You have a good balance between impulsiveness and control.",
    "hoch": "You are very disciplined and carefully consider your actions.",
    "sehr hoch": "You have exceptional self-discipline and can almost always suppress your impulses."
  },
  "Social Sensitivity": {
    "sehr niedrig": "You are hardly affected by the emotions of others and act more rationally.",
    "niedrig": "You perceive the emotions of others but are not strongly influenced by them.",
    "neutral": "You can empathize with others but maintain a certain distance.",
    "hoch": "You are empathetic and pay close attention to interpersonal dynamics.",
    "sehr hoch": "You are extremely empathetic and sensitive to the feelings of others – conflicts or negative moods greatly affect you."
  }
}
`;