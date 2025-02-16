dataset = `
{
    "name": "LPKS_Set2",
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
            "question": "I actively seek out experiences that provide me with immediate pleasure or satisfaction.",
            "dimensions": { "Reward Sensitivity": 1.0, "Risk Tolerance": 0.06 }
        },
        {
            "question": "Winning or receiving praise makes me feel highly motivated and energized.",
            "dimensions": { "Reward Sensitivity": 1.0, "Social Sensitivity": 0.02, "Emotional Reactivity": 0.05 }
        },
        {
            "question": "I feel a strong sense of excitement when I achieve something, even if it's small.",
            "dimensions": { "Reward Sensitivity": 0.75, "Emotional Reactivity": 0.1 }
        },


        {
            "question": "I rarely feel excited or satisfied after accomplishing a goal.",
            "dimensions": { "Reward Sensitivity": -1.0, "Emotional Reactivity": -0.1 }
        },
        {
            "question": "Receiving rewards or praise does not significantly affect my motivation.",
            "dimensions": { "Reward Sensitivity": -1.0, "Social Sensitivity": -0.03 }
        },
        {
            "question": "I tend to focus more on avoiding failure than on seeking reward or praise.",
            "dimensions": { "Reward Sensitivity": -0.75, "Self-Control": 0.01 }
        },




        {
            "question": "I can easily resist temptations that could distract me from my long-term goals.",
            "dimensions": { "Self-Control": 1.0, "Reward Sensitivity": -0.04 }
        },
        {
            "question": "I prefer planning things out in advance rather than acting on impulse.",
            "dimensions": { "Self-Control": 1.0, "Cognitive Flexibility": -0.02 }
        },
        {
            "question": "I tend to delay gratification in order to achieve greater rewards later",
            "dimensions": { "Self-Control": 0.8, "Reward Sensitivity": 0.1 }
        },


        {
            "question": "I often act on impulse without thinking about the consequences.",
            "dimensions": { "Self-Control": -1.0, "Risk Tolerance": 0.1 }
        },
        {
            "question": "I find it difficult to stick to long-term commitments or routines.",
            "dimensions": { "Self-Control": -1.0, "Habit Formation": -0.2 }
        },
        {
            "question": "I struggle to maintain focus when faced with distractions.",
            "dimensions": { "Self-Control": -1.0 }
        },





        {
            "question": "I enjoy solving problems in unconventional or creative ways.",
            "dimensions": { "Cognitive Flexibility": 1.0, "Self-Control": -0.01 }
        },
        {
            "question": "I can easily adapt to new situations and unexpected changes.",
            "dimensions": { "Cognitive Flexibility": 1.0, "Habit Formation": -0.02 }
        },
        {
            "question": "I like challenging my own beliefs and perspectives.",
            "dimensions": { "Cognitive Flexibility": 1.25 }
        },


        {
            "question": "I feel uncomfortable when I have to change my usual way of doing things.",
            "dimensions": { "Cognitive Flexibility": -1.0, "Habit Formation": 0.1, "Emotional Reactivity": 0.01}
        },
        {
            "question": "I struggle with thinking outside the box when facing new challenges.",
            "dimensions": { "Cognitive Flexibility": -1.0 }
        },
        {
            "question": "Once I make up my mind about something, I rarely reconsider.",
            "dimensions": { "Cognitive Flexibility": -1.15, "Risk Tolerance": -0.02 }
        },




        {
            "question": "I can easily pick up on subtle social cues and emotions in others.",
            "dimensions": { "Social Sensitivity": 1.0, "Emotional Reactivity": 0.01 }
        },
        {
            "question": "I feel deeply affected by the moods of those around me.",
            "dimensions": { "Social Sensitivity": 1.0, "Emotional Reactivity": 0.15 }
        },
        {
            "question": "I often consider how my actions will impact other people before making decisions.",
            "dimensions": { "Social Sensitivity": 0.6, "Self-Control": 0.06 }
        },


        {
            "question": "I don't usually notice when someone is feeling uncomfortable or upset.",
            "dimensions": { "Social Sensitivity": -1.0, "Emotional Reactivity": -0.02 }
        },
        {
            "question": "I find it difficult to empathize with people unless I have experienced the same situation myself.",
            "dimensions": { "Social Sensitivity": -0.85, "Cognitive Flexibility": -0.04 }
        },
        {
            "question": "Other people's emotions don't really affect me.",
            "dimensions": { "Social Sensitivity": -1.0, "Emotional Reactivity": -0.1 }
        },




        {
            "question": "I enjoy taking risks and trying new things, even if they might not work out.",
            "dimensions": { "Risk Tolerance": 1.0, "Cognitive Flexibility": 0.05 }
        },
        {
            "question": "I often make decisions quickly, without overanalyzing potential downsides.",
            "dimensions": { "Risk Tolerance": 1.0, "Self-Control": -0.03 }
        },
        {
            "question": "I feel excited rather than anxious when faced with uncertainty.",
            "dimensions": { "Risk Tolerance": 0.75, "Emotional Reactivity": -0.01 }
        },


        {
            "question": "I prefer to play it safe rather than take risks, even if it means missing out.",
            "dimensions": { "Risk Tolerance": -1.0, "Reward Sensitivity": -0.05 }
        },
        {
            "question": "I avoid situations where I might fail, even if they offer potential rewards.",
            "dimensions": { "Risk Tolerance": -1.0, "Reward Sensitivity": -0.1 }
        },
        {
            "question": "Uncertainty makes me very uncomfortable, and I try to minimize it as much as possible.",
            "dimensions": { "Risk Tolerance": -0.75, "Cognitive Flexibility": -0.04, "Emotional Reactivity": 0.05 }
        },




        {
            "question": "I experience emotions very intensely, both positive and negative.",
            "dimensions": { "Emotional Reactivity": 1.0, "Social Sensitivity": 0.1 }
        },
        {
            "question": "Small events can have a big impact on my mood.",
            "dimensions": { "Emotional Reactivity": 1.0, "Self-Control": -0.05 }
        },
        {
            "question": "I find it hard to stay calm when something upsets me.",
            "dimensions": { "Emotional Reactivity": 1.15, "Risk Tolerance": -0.01 }
        },


        {
            "question": "I rarely feel strong emotions, even in significant situations.",
            "dimensions": { "Emotional Reactivity": -1.0, "Social Sensitivity": -0.02 }
        },
        {
            "question": "I am usually very composed and don’t let emotions influence my decisions.",
            "dimensions": { "Emotional Reactivity": -1.05, "Self-Control": 0.01 }
        },
        {
            "question": "I can easily detach myself from emotional situations and remain objective.",
            "dimensions": { "Emotional Reactivity": -1.05, "Cognitive Flexibility": 0.01 }
        },




        {
            "question": "I thrive when I have a structured routine and clear expectations.",
            "dimensions": { "Habit Formation": 1.0, "Self-Control": 0.02 }
        },
        {
            "question": "Once I form a habit, I stick to it for a long time.",
            "dimensions": { "Habit Formation": 1.0, "Cognitive Flexibility": -0.01 }
        },
        {
            "question": "I prefer familiar environments and routines over constant change.",
            "dimensions": { "Habit Formation": 0.75, "Risk Tolerance": -0.05 }
        },


        {
            "question": "I get bored quickly if I have to do the same thing repeatedly.",
            "dimensions": { "Habit Formation": -1.0, "Cognitive Flexibility": 0.01 }
        },
        {
            "question": "I struggle to maintain consistent habits in my daily life.",
            "dimensions": { "Habit Formation": -1.0, "Self-Control": -0.03 }
        },
        {
            "question": "I often change my plans spontaneously, even if I originally committed to something else.",
            "dimensions": { "Habit Formation": -0.8, "Risk Tolerance": 0.02 }
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