// Editable copy, captions, and media. See docs/editing-case-studies.md.
// Keep each explanation and its related media inside the same pair or figure.
export const content = {
  "projectId": "project-4",
  "slug": "living-calendar",
  "hero": {
    "title": "A Living Calendar",
    "period": "2025.12-2026.4",
    "disciplines": ["Interactive Website", "UX/UI Design", "Creative Coding"],
    "subtitle": [
      { "text": "Reconnecting daily life with " },
      { "text": "seasonal change", "tone": "highlight" },
      { "text": "." }
    ],
    "problem": "People recognized the 24 Solar Terms as cultural heritage, yet felt disconnected from the seasonal changes behind them in daily life.",
    "description": "I built an interactive calendar combining daylight and shadow, cultural stories, and prompts for seasonal reflection.",
    "link": {"text": "https://24-solar-terms-eta.vercel.app/intro", "href": "https://24-solar-terms-eta.vercel.app/intro"}
  },
  "sections": [
    {
      "id": "message-from-home",
      "title": "Message from home",
      "takeaway": [
        {"text": "A family ritual revealed my own "},
        {"text": "distance from seasonal life", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "today-is-the-beginning-of-winter-did-3",
          "items": [
            {
              "type": "heading",
              "id": "today-is-the-beginning-of-winter-did",
              "text": "\"Today is the Beginning of Winter. Did you eat dumplings?\""
            },
            {
              "type": "text",
              "id": "growing-up-in-china-the-24-solar",
              "text": "In China, seasonal foods and family traditions connected me to the Solar Terms. After moving abroad, I barely noticed their calendar notifications."
            }
          ]
        }
      ]
    },
    {
      "id": "the-disconnect",
      "title": "The Disconnect",
      "takeaway": [
        {"text": "Modern calendars organize our schedules while "},
        {"text": "seasonal change fades into the background", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "a-temporal-gap-emerges-as-modern-calendrical-2",
          "items": [
            {
              "type": "columns",
              "id": "before-digital-clocks-and-numerical-dates-humans-3",
              "items": [
                {
                  "type": "pair",
                  "id": "before-digital-clocks-and-numerical-dates-humans-2",
                  "copy": {
                    "type": "text",
                    "id": "before-digital-clocks-and-numerical-dates-humans",
                    "text": "Light, wind, and shadows once helped people read seasonal change."
                  },
                  "media": {
                    "type": "composition",
                    "id": "seasonal-observation-collage",
                    "items": [
                      {
                        "type": "image",
                        "id": "the-disconnect-what-s-the-weather-forecast-at-work-1",
                        "src": "/img/project-4/what-s-the-weather-forecast-at-work-1.svg",
                        "alt": "Weather as a cue for observing seasonal change",
                        "width": 143.0,
                        "height": 100.0
                      },
                      {
                        "type": "image",
                        "id": "the-disconnect-wolfgang-hasselmann-br-gllg7bs-unsplash-2-ver-1-1",
                        "src": "/img/project-4/wolfgang-hasselmann-br-gllg7bs-unsplash-2-ver-1-1.svg",
                        "alt": "A landscape showing environmental and seasonal change",
                        "width": 160.0,
                        "height": 112.0
                      },
                      {
                        "type": "image",
                        "id": "the-disconnect-photo-dark-and-stormy-cloudscape-istock-1125x534",
                        "src": "/img/project-4/photo-dark-and-stormy-cloudscape-istock-1125x534-landscape-1.svg",
                        "alt": "Dark storm clouds as a natural time cue",
                        "width": 161.0,
                        "height": 100.0
                      },
                      {
                        "type": "image",
                        "id": "the-disconnect-transparent-window-shadow-overlay-template-47987",
                        "src": "/img/project-4/transparent-window-shadow-overlay-template-47987-19967-1.svg",
                        "alt": "Window shadows showing changes in natural light",
                        "width": 142.0,
                        "height": 111.0
                      }
                    ]
                  }
                },
                {
                  "type": "image",
                  "id": "the-disconnect-expand-right-2",
                  "src": "/img/project-4/expand-right-2.svg",
                  "alt": "",
                  "width": 24.0,
                  "height": 24.0,
                  "decorative": true
                },
                {
                  "type": "pair",
                  "id": "today-our-modern-calendar-shows-holidays-deadlines-2",
                  "copy": {
                    "type": "text",
                    "id": "today-our-modern-calendar-shows-holidays-deadlines",
                    "text": "Digital calendars foreground holidays, deadlines, and meetings."
                  },
                  "media": {
                    "type": "image",
                    "id": "the-disconnect-behind-the-screen-look-at-my-digital-calendar-1",
                    "src": "/img/project-4/behind-the-screen-look-at-my-digital-calendar-1.svg",
                    "alt": "Today, our modern calendar shows holidays, deadlines, — design study",
                    "width": 330.0,
                    "height": 237.0
                  }
                },
                {
                  "type": "image",
                  "id": "the-disconnect-expand-right-2-2",
                  "src": "/img/project-4/expand-right-2.svg",
                  "alt": "",
                  "width": 24.0,
                  "height": 24.0,
                  "decorative": true
                },
                {
                  "type": "heading",
                  "id": "ecology-gets-flattened-and-removed-so-the",
                  "text": "Environmental cues disappear from our view of time."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "time-told-by-nature-not-numbers",
      "title": [
        {"text": "Time Told by "},
        {"text": "Nature, Not Numbers", "tone": "highlight"}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "whats-24-solar-terms-2",
          "items": [
            {
              "type": "columns",
              "id": "the-24-solar-terms-are-a-traditional-3",
              "items": [
                {
                  "type": "pair",
                  "id": "the-24-solar-terms-are-a-traditional-2",
                  "copy": {
                    "type": "text",
                    "id": "the-24-solar-terms-are-a-traditional",
                    "text": "The 24 Solar Terms mark seasonal changes, from spring rain to frost. This traditional East Asian calendar guided sowing, harvesting, and preparation for changing conditions. It also shaped food customs, poetry, and festivals."
                  },
                  "media": {
                    "type": "image",
                    "id": "time-told-by-nature-not-numbers-group-2",
                    "src": "/img/project-4/group-2.svg",
                    "alt": "The 24 Solar Terms are a traditional — design study",
                    "width": 188.0,
                    "height": 201.0
                  }
                },
                {
                  "type": "image",
                  "id": "time-told-by-nature-not-numbers-expand-right-2",
                  "src": "/img/project-4/expand-right-2.svg",
                  "alt": "",
                  "width": 24.0,
                  "height": 24.0,
                  "decorative": true
                },
                {
                  "type": "heading",
                  "id": "the-system-functions-not-only-as-a",
                  "text": "Seasonal observation connected farming with everyday rituals."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "understanding-existing-connections",
      "title": "Understanding Existing Connections",
      "takeaway": [
        {"text": "Cultural recognition was high; "},
        {"text": "everyday engagement was low", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "since-the-solar-terms-originated-in-chinese-2",
          "items": [
            {
              "type": "text",
              "id": "since-the-solar-terms-originated-in-chinese",
              "text": "I asked people who grew up with the Solar Terms how they relate to them today."
            },
            {
              "type": "columns",
              "id": "how-do-people-experience-seasons-today-3",
              "items": [
                {
                  "type": "group",
                  "id": "how-do-people-experience-seasons-today-2",
                  "items": [
                    {"type": "text", "id": "how-do-people-experience-seasons-today", "text": "How do people experience seasons today?"},
                    {
                      "type": "text",
                      "id": "70-of-them-feel-only-somewhat-connected",
                      "text": "feel only somewhat connected to seasonal changes in daily life."
                    },
                    {
                      "type": "chart",
                      "id": "seasonal-connection-chart",
                      "variant": "donut",
                      "label": "Connection to seasonal changes",
                      "highlight": ["Somewhat connected"],
                      // Transcribed from image-39.svg and its legend in image-38.svg.
                      // The three nonzero slices total 100%; Not connected has no slice.
                      "data": [
                        {"label": "Somewhat connected", "value": 70, "color": "#b98358"},
                        {"label": "Moderately connected", "value": 20, "color": "#d6bb76"},
                        {"label": "Very connected", "value": 10, "color": "#83895b"},
                        {"label": "Not connected", "value": 0, "color": "#b6bec2"}
                      ]
                    }
                  ]
                },
                {
                  "type": "group",
                  "id": "how-familiar-are-you-with-the-24-2",
                  "items": [
                    {"type": "text", "id": "how-familiar-are-you-with-the-24", "text": "How familiar are you with the 24 Solar Terms?"},
                    {"type": "text", "id": "more-than-half-of-them-understand-24", "text": "are very or moderately familiar with the 24 Solar Terms."},
                    {
                      "type": "chart",
                      "id": "solar-term-familiarity-chart",
                      "variant": "bars",
                      "label": "Familiarity with the 24 Solar Terms",
                      "highlight": ["Very familiar", "Moderately familiar"],
                      // Original percentages from group-23981-1.svg, without re-rounding.
                      "data": [
                        {"label": "Very familiar", "value": 13.79},
                        {"label": "Moderately familiar", "value": 41.38},
                        {"label": "Slightly familiar", "value": 36.78},
                        {"label": "Only know the name", "value": 4.6},
                        {"label": "Barely familiar", "value": 3.45},
                        {"label": "Not familiar at all", "value": 0}
                      ]
                    }
                  ]
                },
                {
                  "type": "group",
                  "id": "do-you-think-modern-life-makes-you-2",
                  "items": [
                    {
                      "type": "text",
                      "id": "do-you-think-modern-life-makes-you",
                      "text": "Do you think modern life makes you less aware of seasonal changes?"
                    },
                    {
                      "type": "text",
                      "id": "people-feel-disconnected-from-nature-due-to",
                      "text": "say modern life makes them less aware of seasonal changes, at least a little."
                    },
                    {
                      "type": "chart",
                      "id": "modern-life-awareness-chart",
                      "variant": "bars",
                      "label": "Does modern life reduce seasonal awareness?",
                      "highlight": ["Yes", "A little"],
                      // Original percentages from group-23982-1.svg; displayed total is 100.01% due to rounding.
                      "data": [
                        {"label": "Yes", "value": 28.74},
                        {"label": "A little", "value": 45.98},
                        {"label": "No", "value": 22.99},
                        {"label": "Hard to say", "value": 2.3}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "group",
              "id": "key-findings-2",
              "items": [
                {"type": "text", "id": "key-findings", "text": "Key findings:"},
                {
                  "type": "columns",
                  "id": "high-3",
                  "items": [
                    {
                      "type": "group",
                      "id": "high-2",
                      "items": [
                        {"type": "label", "id": "high", "text": "High"},
                        {"type": "text", "id": "awareness-recognition", "text": "Awareness + Recognition"}
                      ]
                    },
                    {
                      "type": "group",
                      "id": "low-2",
                      "items": [
                        {"type": "label", "id": "low", "text": "Low"},
                        {"type": "text", "id": "active-engagement", "text": "Active engagement"}
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "id": "most-participants-associate-them-with-cultural-heritage",
                  "text": [
                    {"text": "Most participants associate them with "},
                    {"text": "cultural heritage rather than ecological awareness", "strong": true}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a-different-problem-emerged",
      "title": "A Different Problem Emerged",
      "takeaway": [
        {"text": "The focus shifted from preserving cultural knowledge to "},
        {"text": "reconnecting people with seasonal change", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "text",
          "id": "i-initially-assumed-this-was-a-cultural",
          "assumptionTitle": "Cultural preservation",
          "findingTitle": "Ecological disconnection",
          "text": "I expected cultural knowledge to be fading.\nThe research shifted the focus.\nParticipants recognized the Solar Terms but felt disconnected from their ecological meaning."
        }
      ]
    },
    {
      "id": "expanding-the-audience",
      "title": "Expanding the Audience",
      "takeaway": [
        {"text": "Sensory cues offer a "},
        {"text": "shared entry point across cultures", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "if-awareness-alone-wasn-t-enough-what-actually-2",
          "items": [
            {
              "type": "columns",
              "id": "how-do-people-notice-seasonal-change-3",
              "items": [
                {
                  "type": "group",
                  "id": "how-do-people-notice-seasonal-change-2",
                  "highlights": [
                    {"dataLabel": "Temperature change", "label": "Temperature"},
                    {"dataLabel": "Daylight length", "label": "Daylight shifts"},
                    {"dataLabel": "Plant changes", "label": "Plant changes"}
                  ],
                  "items": [
                    {"type": "text", "id": "how-do-people-notice-seasonal-change", "text": "How do people notice seasonal change?"},
                    {
                      "type": "text",
                      "id": "top-cues-for-seasons-temperature-88-5-daylight",
                      "text": "Top cues for seasons: Temperature (88.51%), daylight shifts (62.07%), plant changes (59.77%)."
                    },
                    {
                      "type": "chart",
                      "id": "seasonal-cues-chart",
                      "variant": "bars",
                      "selectionMode": "multiple",
                      "sampleSize": 10,
                      "label": "How people notice seasonal change",
                      "scaleLabel": "Respondents selecting each option",
                      "highlight": ["Temperature change", "Daylight length", "Plant changes"],
                      // Read from image-37.svg and its legends in image-40.svg / group-11.svg.
                      // Dressing change and Holiday tradition have no identifiable slices.
                      // The 37.93% slice has no matching legend color; the 2.3% label reads "Athe [Details]".
                      // Keep those unresolved entries out of the chart rather than assign or invent values.
                      "data": [
                        {"label": "Temperature change", "value": 88.51},
                        {"label": "Daylight length", "value": 62.07},
                        {"label": "Plant changes", "value": 59.77},
                        {"label": "Air smell / humidity", "value": 25.29},
                        {"label": "Weather change", "value": 56.32},
                        {"label": "Seasonal food", "value": 25.29},
                        {"label": "Not likely to notice", "value": 59.77}
                      ]
                    }
                  ]
                },
                {
                  "type": "figure",
                  "id": "what-kinds-of-interactions-feel-meaningful-2",
                  "highlights": [
                    {"dataLabel": "Notice something in nature", "label": "Notice something in nature"},
                    {"dataLabel": "Step outside briefly", "label": "Step outside briefly"}
                  ],
                  "caption": {
                    "type": "text",
                    "id": "what-kinds-of-interactions-feel-meaningful",
                    "text": "What kinds of interactions feel meaningful?"
                  },
                  "media": {
                    "type": "chart",
                    "id": "meaningful-interactions-chart",
                    "variant": "bars",
                    "selectionMode": "multiple",
                    "sampleSize": 10,
                    "label": "Interactions that feel meaningful",
                    "scaleLabel": "Respondents selecting each option",
                    "highlight": ["Notice something in nature", "Step outside briefly"],
                    // Counts and percentages transcribed from group-12-1.svg.
                    "data": [
                      {"label": "Notice something in nature", "value": 80, "count": 8},
                      {"label": "Step outside briefly", "value": 70, "count": 7},
                      {"label": "Light journaling", "value": 20, "count": 2},
                      {"label": "Small wellness ritual", "value": 20, "count": 2},
                      {"label": "Reflect on an intention", "value": 10, "count": 1},
                      {"label": "I prefer no action", "value": 10, "count": 1},
                      {"label": "Other", "value": 0, "count": 0}
                    ]
                  }
                }
              ]
            },
            {
              "type": "group",
              "id": "literature-review-3",
              "items": [
                {"type": "text", "id": "literature-review", "text": "Literature Review"},
                {
                  "type": "text",
                  "id": "to-better-understand-how-cultural-knowledge-can",
                  "text": "Research on cultural memory and phenology informed the sensory approach."
                },
                {
                  "type": "columns",
                  "id": "public-memory-place-hoelscher-alderman-3",
                  "items": [
                    {
                      "type": "group",
                      "id": "public-memory-place-hoelscher-alderman-2",
                      "items": [
                        {
                          "type": "text",
                          "id": "public-memory-place-hoelscher-alderman",
                          "text": [
                            {"text": "Public Memory & Place ", "strong": true, "tone": "muted"},
                            {"text": " "},
                            {"text": "Hoelscher & Alderman (2004)", "tone": "muted"}
                          ]
                        },
                        {
                          "type": "text",
                          "id": "core-finding-cultural-memory-becomes-accessible-when",
                          "text": [
                            {"text": "Core finding: ", "strong": true, "tone": "muted"},
                            {"text": "\n "},
                            {
                              "text": "Cultural memory becomes accessible when tied to sensory cues and spatial storytelling.",
                              "tone": "muted"
                            },
                            {"text": "\n\n "},
                            {"text": "Key takeaway: ", "strong": true, "tone": "muted"},
                            {"text": "\n "},
                            {
                              "text": "Unfamiliar cultural heritage is better understood through sensory experiences, not just abstract text.",
                              "tone": "muted"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "group",
                      "id": "phenology-seasonal-change-forrest-miller-rushing-2",
                      "items": [
                        {
                          "type": "text",
                          "id": "phenology-seasonal-change-forrest-miller-rushing",
                          "text": [
                            {"text": "Phenology & Seasonal Change ", "strong": true, "tone": "muted"},
                            {"text": " "},
                            {"text": "Forrest & Miller-Rushing (2010)", "tone": "muted"}
                          ]
                        },
                        {
                          "type": "text",
                          "id": "core-finding-phenological-events-plant-animal-cycles-are",
                          "text": [
                            {"text": "Core finding: ", "strong": true, "tone": "muted"},
                            {"text": "\n "},
                            {
                              "text": "Phenological events (plant/animal cycles) are sensitive, universal indicators of seasonal change.",
                              "tone": "muted"
                            },
                            {"text": "\n\n "},
                            {"text": "Key takeaway: ", "strong": true, "tone": "muted"},
                            {"text": "\n "},
                            {
                              "text": "Natural seasonal cues act as a cross-cultural \"language\" to connect users to ecological rhythms.",
                              "tone": "muted"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "group",
              "id": "key-findings-4",
              "items": [
                {"type": "text", "id": "key-findings-3", "text": "Key findings:"},
                {
                  "type": "text",
                  "id": "people-connect-through-sensory-experiences-weather-and",
                  "text": [
                    {"text": "People connect through ", "strong": true, "tone": "olive"},
                    {"text": "sensory experiences.", "strong": true, "tone": "muted"},
                    {"text": "\n"},
                    {"text": "Weather and environmental changes", "strong": true, "tone": "muted"},
                    {"text": " are more memorable than facts.", "strong": true, "tone": "olive"},
                    {"text": "\n"},
                    {"text": "Reflection and observation", "strong": true, "tone": "muted"},
                    {"text": " feel meaningful.", "strong": true, "tone": "olive"},
                    {"text": "\n"},
                    {"text": "Seasonal awareness is universal.", "strong": true, "tone": "muted"}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "key-insights",
      "title": "Key Insights",
      "takeaway": [
        {"text": "Seasonal connection grows through "},
        {"text": "observation, sensory experience, and reflection", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "columns",
          "id": "heritage-without-experience-3",
          "items": [
            {
              "type": "group",
              "id": "heritage-without-experience-2",
              "items": [
                {"type": "label", "id": "heritage-without-experience", "text": "Heritage Without Experience"},
                {
                  "type": "text",
                  "id": "people-recognize-the-st-but-rarely-experience",
                  "text": [
                    {"text": "People recognize the ST but "},
                    {"text": "rarely experience their ecological meaning", "strong": true},
                    {"text": "."}
                  ]
                }
              ]
            },
            {
              "type": "group",
              "id": "seasonal-awareness-is-sensory-2",
              "items": [
                {"type": "label", "id": "seasonal-awareness-is-sensory", "text": "Seasonal Awareness Is Sensory"},
                {
                  "type": "text",
                  "id": "people-connect-through-observation-atmosphere-and-environmental",
                  "text": [
                    {"text": "People connect through "},
                    {"text": "observation, atmosphere, and environmental change", "strong": true},
                    {"text": "."}
                  ]
                }
              ]
            },
            {
              "type": "group",
              "id": "reflection-creates-engagement-2",
              "items": [
                {"type": "label", "id": "reflection-creates-engagement", "text": "Reflection Creates Engagement"},
                {
                  "type": "text",
                  "id": "users-prefer-lightweight-moments-of-reflection-over",
                  "text": [
                    {"text": "Users prefer "},
                    {"text": "lightweight moments of reflection", "strong": true},
                    {"text": " over text-heavy learning."}
                  ]
                }
              ]
            },
            {
              "type": "group",
              "id": "ecological-info-can-cross-cultures-2",
              "items": [
                {"type": "label", "id": "ecological-info-can-cross-cultures", "text": "Ecological Info Can Cross Cultures"},
                {
                  "type": "text",
                  "id": "the-environmental-principles-behind-the-st-resonate",
                  "text": [
                    {"text": "The environmental principles behind the ST "},
                    {"text": "resonate beyond their cultural origins", "strong": true},
                    {"text": "."}
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "design-opportunity",
      "title": "Design Opportunity",
      "blocks": [
        {
          "type": "text",
          "id": "how-might-we-help-people-reconnect-with",
          "text": [{"text": "How might we help people "}, {"text": "reconnect with seasonal rhythms", "strong": true, "tone": "highlight"}, {"text": " through the 24 Solar Terms, across cultures?"}]
        }
      ]
    },
    {
      "id": "designing-for-three-layers-of-connection",
      "title": [
        {"text": "Designing for "},
        {"text": "Three Layers of Connection", "tone": "highlight"}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "to-support-different-ways-of-connecting-with-2",
          "items": [
            {
              "type": "columns",
              "id": "ecological-layer-3",
              "items": [
                {
                  "type": "card",
                  "id": "ecological-layer-2",
                  "items": [
                    {"type": "label", "id": "ecological-layer", "text": "Ecological Layer"},
                    {
                      "type": "text",
                      "id": "helping-users-notice-seasonal-changes-through-environmental",
                      "text": "Notice seasonal changes through weather, daylight, and shadows."
                    }
                  ]
                },
                {
                  "type": "card",
                  "id": "cultural-layer-2",
                  "items": [
                    {"type": "label", "id": "cultural-layer", "text": "Cultural Layer"},
                    {
                      "type": "text",
                      "id": "providing-access-to-the-traditions-rituals-stories",
                      "text": "Explore each term’s traditions, rituals, stories, and poems."
                    }
                  ]
                },
                {
                  "type": "card",
                  "id": "personal-layer-2",
                  "items": [
                    {"type": "label", "id": "personal-layer", "text": "Personal Layer"},
                    {
                      "type": "text",
                      "id": "creating-opportunities-for-users-to-reflect-on",
                      "text": "Relate seasonal change to personal observations and everyday life."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "from-insights-to-features",
      "title": "From Insights to Features",
      "takeaway": [
        {"text": "Prioritize "},
        {"text": "exploration and reflection", "strong": true, "tone": "highlight"},
        {"text": " over content-heavy learning."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "using-the-research-insights-i-translated-user-2",
          "items": [
            {
              "type": "pair",
              "id": "because-users-connected-most-strongly-through-observation-2",
              "copy": {
                "type": "text",
                "id": "because-users-connected-most-strongly-through-observation",
                "text": "80% chose noticing nature and 70% stepping outside as meaningful interactions."
              },
              "media": {
                "type": "image",
                "id": "from-insights-to-features-group-23983-1",
                "src": "/img/project-4/group-23983-1.svg",
                "alt": "Because users connected most strongly through observation — design study",
                "width": 928.0,
                "height": 536.0
              }
            }
          ]
        }
      ]
    },
    {
      "id": "exploring-ways-to-experience-time",
      "title": "Exploring Ways to Experience Time",
      "takeaway": [
        {"text": "Early concepts exposed a tension between "},
        {"text": "familiar navigation and seasonal immersion", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "i-explored-several-approaches-for-presenting-the-2",
          "items": [
            {
              "type": "text",
              "id": "visual-references-exploring-traditional-chinese-aesthetics-and",
              "text": "Visual references: Chinese aesthetics and seasonal motifs."
            },
            {
              "type": "columns",
              "id": "exploring-ways-to-experience-time-visuals-3",
              "items": [
                {
                  "type": "image",
                  "id": "exploring-ways-to-experience-time-1475f61abebaadb02d7478c9c24754",
                  "src": "/img/project-4/1475f61abebaadb02d7478c9c2475477-1.svg",
                  "alt": "Visual References — design study",
                  "width": 137.0,
                  "height": 161.0
                },
                {
                  "type": "image",
                  "id": "exploring-ways-to-experience-time-132af981541834dfc526b43669d035",
                  "src": "/img/project-4/132af981541834dfc526b43669d035c9-1.svg",
                  "alt": "Visual References — design study",
                  "width": 137.0,
                  "height": 161.0
                },
                {
                  "type": "image",
                  "id": "exploring-ways-to-experience-time-6cfe9ccbef00ee5c21a44f64d3fbf3",
                  "src": "/img/project-4/6cfe9ccbef00ee5c21a44f64d3fbf3ad-1.svg",
                  "alt": "Visual References — design study",
                  "width": 137.0,
                  "height": 161.0
                },
                {
                  "type": "image",
                  "id": "exploring-ways-to-experience-time-ee4f93f5b479d01e7b54d10336aaaa",
                  "src": "/img/project-4/ee4f93f5b479d01e7b54d10336aaaa3a-1.svg",
                  "alt": "Visual References — design study",
                  "width": 137.0,
                  "height": 161.0
                },
                {
                  "type": "columns",
                  "id": "exploring-ways-to-experience-time-visuals",
                  "items": [
                    {
                      "type": "image",
                      "id": "exploring-ways-to-experience-time-5ec86458084819-59ef2ecd5e2fd",
                      "src": "/img/project-4/5ec86458084819-59ef2ecd5e2fd.svg",
                      "alt": "Visual References — design study",
                      "width": 116.0,
                      "height": 78.0
                    },
                    {
                      "type": "image",
                      "id": "exploring-ways-to-experience-time-dce6d058084819-59ef2ecd5a4c9",
                      "src": "/img/project-4/dce6d058084819-59ef2ecd5a4c9.svg",
                      "alt": "Visual References — design study",
                      "width": 110.0,
                      "height": 78.0
                    },
                    {
                      "type": "image",
                      "id": "exploring-ways-to-experience-time-678cdf58084819-59ef30c9755cb",
                      "src": "/img/project-4/678cdf58084819-59ef30c9755cb.svg",
                      "alt": "Visual References — design study",
                      "width": 220.0,
                      "height": 78.0
                    }
                  ]
                },
                {
                  "type": "image",
                  "id": "exploring-ways-to-experience-time-f93bab0574afc5e1b2dced66e33e27",
                  "src": "/img/project-4/f93bab0574afc5e1b2dced66e33e275c-1.svg",
                  "alt": "Visual References — design study",
                  "width": 137.0,
                  "height": 161.0
                },
                {
                  "type": "image",
                  "id": "exploring-ways-to-experience-time-b1a58b36bfeebf5c21f7254693142f",
                  "src": "/img/project-4/b1a58b36bfeebf5c21f7254693142f61-1.svg",
                  "alt": "Visual References — design study",
                  "width": 137.0,
                  "height": 161.0
                },
                {
                  "type": "image",
                  "id": "exploring-ways-to-experience-time-screenshot-2025-11-16-at-22-57",
                  "src": "/img/project-4/screenshot-2025-11-16-at-22-57-56.svg",
                  "alt": "Visual References — design study",
                  "width": 137.0,
                  "height": 161.0
                },
                {
                  "type": "group",
                  "id": "exploring-ways-to-experience-time-visuals-2",
                  "items": [
                    {
                      "type": "image",
                      "id": "exploring-ways-to-experience-time-3516fc171703bcb1369d6763b5f8a1",
                      "src": "/img/project-4/3516fc171703bcb1369d6763b5f8a1ac-1.svg",
                      "alt": "Visual References — design study",
                      "width": 120.0,
                      "height": 76.0
                    },
                    {
                      "type": "image",
                      "id": "exploring-ways-to-experience-time-a778f8c920e88453065d0c0c89118d",
                      "src": "/img/project-4/a778f8c920e88453065d0c0c89118df8-1.svg",
                      "alt": "Visual References — design study",
                      "width": 120.0,
                      "height": 76.0
                    }
                  ]
                }
              ]
            },
            {
              "type": "columns",
              "id": "concept-sketches-1-calendar-inspired-interface-4",
              "items": [
                {
                  "type": "pair",
                  "id": "concept-sketches-1-calendar-inspired-interface-3",
                  "copy": {
                    "type": "group",
                    "id": "concept-sketches-1-calendar-inspired-interface-2",
                    "items": [
                      {
                        "type": "text",
                        "id": "concept-sketches-1-calendar-inspired-interface",
                        "text": "Concept 1: Linear Calendar Interface"
                      },
                      {
                        "type": "text",
                        "id": "explore-a-familiar-and-accessible-way-of",
                        "text": "A familiar timeline arranges the 24 Solar Terms in sequence."
                      }
                    ]
                  },
                  "media": {
                    "type": "columns",
                    "id": "exploring-ways-to-experience-time-visuals-4",
                    "items": [
                      {
                        "type": "image",
                        "id": "exploring-ways-to-experience-time-img-3450-3",
                        "src": "/img/project-4/img-3450-3.svg",
                        "alt": "Concept Sketches 1: Calendar-inspired Interface — design study",
                        "width": 207.0,
                        "height": 167.0
                      },
                      {
                        "type": "image",
                        "id": "exploring-ways-to-experience-time-img-3314-2",
                        "src": "/img/project-4/img-3314-2.svg",
                        "alt": "Concept Sketches 1: Calendar-inspired Interface — design study",
                        "width": 198.0,
                        "height": 167.0
                      },
                      {
                        "type": "image",
                        "id": "exploring-ways-to-experience-time-macbook-pro-14-15-1",
                        "src": "/img/project-4/macbook-pro-14----15-1.svg",
                        "alt": "Concept Sketches 1: Calendar-inspired Interface — design study",
                        "width": 257.0,
                        "height": 167.0
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "columns",
              "id": "concept-sketches-2-time-as-a-cycle-4",
              "items": [
                {
                  "type": "pair",
                  "id": "concept-sketches-2-time-as-a-cycle-3",
                  "copy": {
                    "type": "group",
                    "id": "concept-sketches-2-time-as-a-cycle-2",
                    "items": [
                      {"type": "text", "id": "concept-sketches-2-time-as-a-cycle", "text": "Concept 2: Circular / Cyclical Navigation"},
                      {
                        "type": "text",
                        "id": "explore-whether-the-astronomical-foundations-of-the",
                        "text": "A circular dial connects solar longitude with the recurring seasonal cycle."
                      }
                    ]
                  },
                  "media": {
                    "type": "columns",
                    "id": "exploring-ways-to-experience-time-visuals-5",
                    "items": [
                      {
                        "type": "image",
                        "id": "exploring-ways-to-experience-time-img-3901-2",
                        "src": "/img/project-4/img-3901-2.svg",
                        "alt": "Concept Sketches 2: Time as a Cycle — design study",
                        "width": 254.0,
                        "height": 169.0
                      },
                      {
                        "type": "image",
                        "id": "exploring-ways-to-experience-time-img-3323-2",
                        "src": "/img/project-4/img-3323-2.svg",
                        "alt": "Concept Sketches 2: Time as a Cycle — design study",
                        "width": 262.0,
                        "height": 161.0
                      },
                      {
                        "type": "image",
                        "id": "exploring-ways-to-experience-time-image-27",
                        "src": "/img/project-4/image-27.svg",
                        "alt": "Concept Sketches 2: Time as a Cycle — design study",
                        "width": 205.0,
                        "height": 169.0
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "group",
              "id": "concept-comparison",
              "heading": {
                "type": "heading",
                "id": "concept-comparison-title",
                "text": "Comparing the Concepts"
              },
              "columns": [
                "Decision criterion",
                "Linear calendar",
                "Circular / cyclical model"
              ],
              "rows": [
                {
                  "criterion": "First-use clarity",
                  "cells": [
                    {
                      "type": "text",
                      "id": "low-learning-curve",
                      "text": "Familiar calendar conventions offer a low learning barrier."
                    },
                    {
                      "type": "text",
                      "id": "too-abstract",
                      "text": "The abstract dial needs cues for rotation and term selection."
                    }
                  ]
                },
                {
                  "criterion": "Seasonal expression",
                  "cells": [
                    {
                      "type": "text",
                      "id": "weak-seasonal-immersion",
                      "text": "A sequence is easy to scan, but gives less sense of a continuous cycle."
                    },
                    {
                      "type": "text",
                      "id": "better-seasonal-representation",
                      "text": "The circular form makes annual recurrence and seasonal progression visible."
                    }
                  ]
                }
              ],
              "decision": {
                "type": "text",
                "id": "concept-comparison-decision",
                "text": [
                  {
                    "text": "Decision: ",
                    "strong": true
                  },
                  {
                    "text": "I chose the circular dial for seasonal exploration and kept a year calendar for date lookup. This prioritized seasonal connection, while accepting a less familiar interaction that would need clearer cues."
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "id": "designing-a-seasonal-journey",
      "title": "Designing a Seasonal Journey",
      "blocks": [
        {
          "type": "group",
          "id": "once-the-overall-direction-was-established-i-2",
          "items": [
            {
              "type": "columns",
              "id": "users-familiar-with-the-solar-terms-but-3",
              "items": [
                {
                  "type": "pair",
                  "id": "users-familiar-with-the-solar-terms-but-2",
                  "copy": {
                    "type": "group",
                    "id": "users-familiar-with-the-solar-terms-but",
                    "items": [
                      {
                        "type": "heading",
                        "id": "familiar-audience-title",
                        "text": [
                          {"text": "Chinese Cultural Background", "tone": "highlight"}
                        ]
                      },
                      {
                        "type": "text",
                        "id": "familiar-audience-need",
                        "text": "Familiar with the Solar Terms through family traditions, but seeking a closer connection to nature in everyday life."
                      }
                    ]
                  },
                  "media": {
                    "type": "image",
                    "id": "designing-a-seasonal-journey-frame-1437254417-1",
                    "src": "/img/project-4/frame-1437254417-1.svg",
                    "alt": "Persona for an audience with a Chinese cultural background seeking to reconnect familiar Solar Term traditions with everyday nature",
                    "width": 628.0,
                    "height": 637.0
                  }
                },
                {
                  "type": "pair",
                  "id": "users-unfamiliar-with-the-solar-terms-but-2",
                  "copy": {
                    "type": "group",
                    "id": "users-unfamiliar-with-the-solar-terms-but",
                    "items": [
                      {
                        "type": "heading",
                        "id": "new-audience-title",
                        "text": [
                          {"text": "Global Audience", "tone": "highlight"}
                        ]
                      },
                      {
                        "type": "text",
                        "id": "new-audience-need",
                        "text": "Curious about seasonal change and Chinese culture; need an accessible introduction to the Solar Terms."
                      }
                    ]
                  },
                  "media": {
                    "type": "image",
                    "id": "designing-a-seasonal-journey-frame-1437254418-1",
                    "src": "/img/project-4/frame-1437254418-1.svg",
                    "alt": "Persona for a global audience discovering the Solar Terms through an interest in seasonal change and Chinese culture",
                    "width": 628.0,
                    "height": 637.0
                  }
                }
              ]
            },
            {
              "type": "group",
              "id": "shared-needs-2",
              "items": [
                {"type": "text", "id": "shared-needs", "text": "Shared Needs:"},
                {"type": "text", "id": "low-friction-experience", "text": "Low-friction experience"},
                {"type": "text", "id": "stronger-awareness-of-seasonal-change", "text": "Stronger awareness of seasonal change"},
                {"type": "text", "id": "visual-and-sensory-learning", "text": "Visual and sensory learning"},
                {"type": "text", "id": "connections-between-nature-and-daily-life", "text": "Connections between nature and daily life"}
              ]
            },
            {
              "type": "text",
              "id": "journey-map-what-challenges-do-they-face",
              "text": [
                {"text": "Journey Map ", "strong": true, "tone": "muted"},
                {"text": "(What challenges do they face?)", "strong": true, "tone": "olive"}
              ]
            },
            {
              "type": "image",
              "id": "designing-a-seasonal-journey-journey-map-1",
              "src": "/img/project-4/journey-map-1.svg",
              "alt": "Journey Map (What challenges do they face?) — design study",
              "width": 578.0,
              "height": 494.0
            },
            {
              "type": "group",
              "id": "opportunities-2",
              "items": [
                {"type": "text", "id": "opportunities", "text": "Opportunities:"},
                {"type": "text", "id": "lower-the-entry-barrier", "text": "Lower the Entry Barrier"},
                {"type": "text", "id": "visualize-seasonal-change", "text": "Visualize Seasonal Change"},
                {"type": "text", "id": "bridge-ecology-and-culture", "text": "Bridge Ecology and Culture"},
                {"type": "text", "id": "design-for-cross-cultural-understanding", "text": "Design for Cross-Cultural Understanding"}
              ]
            },
            {
              "type": "group",
              "id": "sitemap-and-user-flow",
              "items": [
                {
                  "type": "figure",
                  "id": "sitemap-how-should-information-be-organized-2",
                  "caption": {
                    "type": "text",
                    "id": "sitemap-how-should-information-be-organized",
                    "text": [
                      {"text": "Sitemap ", "strong": true, "tone": "muted"},
                      {"text": "(How should information be organized?)", "strong": true, "tone": "olive"}
                    ]
                  },
                  "media": {
                    "type": "diagram",
                    "id": "designing-a-seasonal-journey-group-23984-1",
                    "variant": "sitemap",
                    "label": "Living Calendar sitemap",
                    "description": "Home branches into Term wheel and Intro, an introduction to the 24 Solar Terms. The Term wheel leads to Terms, with four content areas: Rituals, Ecological Signals, Calendar, and Personal Reflection.",
                    "nodes": [
                      {"key": "home", "lines": ["Home"], "kind": "root"},
                      {"key": "wheel", "lines": ["Term wheel"], "kind": "section"},
                      {"key": "intro", "lines": ["Intro", "What are the 24 Solar Terms?"], "narrowLines": ["Intro", "What are the", "24 Solar Terms?"], "kind": "intro"},
                      {"key": "terms", "lines": ["Terms"], "kind": "section"},
                      {"key": "rituals", "lines": ["Rituals"]},
                      {"key": "ecology", "lines": ["Ecological Signals"]},
                      {"key": "calendar", "lines": ["Calendar"]},
                      {"key": "reflection", "lines": ["Personal Reflection"]}
                    ],
                    "edges": [
                      {"key": "home-wheel", "from": "home", "to": "wheel"},
                      {"key": "home-intro", "from": "home", "to": "intro"},
                      {"key": "wheel-terms", "from": "wheel", "to": "terms"}
                    ]
                  }
                },
                {"type": "heading", "id": "user-flow", "text": "User Flow"},
                {
                  "type": "text",
                  "id": "with-the-overall-structure-established-i-mapped",
                  "text": "From the current term, users can browse the list, open details, or continue to another term."
                },
                {
                  "type": "diagram",
                  "id": "designing-a-seasonal-journey-user-map-1-1",
                  "variant": "userFlow",
                  "label": "Living Calendar user flow",
                  "description": "Start by viewing the current Solar Term, then choose a path: browse the Solar Term list or open the current term's details. From the details, return to the Solar Term list or continue to another Solar Term's details.",
                  "nodes": [
                    {"key": "start", "lines": ["Start"], "kind": "start"},
                    {"key": "current", "lines": ["View current Solar Term"], "kind": "section"},
                    {"key": "choice", "lines": ["Choose a path"], "kind": "decision"},
                    {"key": "list", "lines": ["Solar Term list"]},
                    {"key": "details", "lines": ["Solar Term details"], "kind": "section"},
                    {"key": "another", "lines": ["Another Solar Term’s details"]}
                  ],
                  "edges": [
                    {"key": "start-current", "from": "start", "to": "current"},
                    {"key": "current-choice", "from": "current", "to": "choice"},
                    {"key": "choice-list", "from": "choice", "to": "list", "label": "Browse terms"},
                    {"key": "choice-details", "from": "choice", "to": "details", "label": "Open details"},
                    {"key": "details-list", "from": "details", "to": "list", "label": "Back to list"},
                    {"key": "details-another", "from": "details", "to": "another"}
                  ]
                }
              ]
            },
            {
              "type": "text",
              "id": "storyboard-what-should-the-experience-feel-like",
              "text": [
                {"text": "Storyboard ", "strong": true, "tone": "muted"},
                {"text": "(What should the experience feel like?)", "strong": true, "tone": "olive"}
              ]
            },
            {
              "type": "text",
              "id": "finally-i-visualized-how-a-user-might",
              "text": "An imagined encounter: Maya connects a digital seasonal cue to the view outside her window."
            },
            {
              "type": "columns",
              "id": "maya-feels-overwhelmed-by-numbered-calendars-days-3",
              "items": [
                {
                  "type": "figure",
                  "id": "maya-feels-overwhelmed-by-numbered-calendars-days-2",
                  "caption": {
                    "type": "text",
                    "id": "maya-feels-overwhelmed-by-numbered-calendars-days",
                    "text": "Maya feels overwhelmed by numbered calendars. Days all feel the same."
                  },
                  "media": {
                    "type": "image",
                    "id": "designing-a-seasonal-journey-chatgpt-image-dec-1-2025-11-10-55-p",
                    "src": "/img/project-4/chatgpt-image-dec-1--2025--11-10-55-pm-1.svg",
                    "alt": "Maya feels overwhelmed by numbered calendars. Days — design study",
                    "width": 198.0,
                    "height": 220.0
                  }
                },
                {
                  "type": "pair",
                  "id": "while-studying-with-a-friend-maya-notices-2",
                  "copy": {
                    "type": "text",
                    "id": "while-studying-with-a-friend-maya-notices",
                    "text": "While studying, Maya notices a gently pulsing orb on her friend’s laptop."
                  },
                  "media": {
                    "type": "image",
                    "id": "designing-a-seasonal-journey-1d5b9190-dcfb-424d-be02-86331864511",
                    "src": "/img/project-4/1d5b9190-dcfb-424d-be02-863318645113-1.svg",
                    "alt": "While studying with a friend, Maya notices — design study",
                    "width": 251.0,
                    "height": 219.0
                  }
                },
                {
                  "type": "pair",
                  "id": "she-learns-shes-currently-in-beginning-of-2",
                  "copy": {
                    "type": "text",
                    "id": "she-learns-shes-currently-in-beginning-of",
                    "text": "She learns she’s currently in “Beginning of Spring,” a transition period of wind and awakening."
                  },
                  "media": {
                    "type": "image",
                    "id": "designing-a-seasonal-journey-chatgpt-image-dec-1-2025-11-10-55-p-2",
                    "src": "/img/project-4/chatgpt-image-dec-1--2025--11-10-55-pm-4.svg",
                    "alt": "She learns she’s currently in “Beginning of — design study",
                    "width": 214.0,
                    "height": 219.0
                  }
                },
                {
                  "type": "pair",
                  "id": "her-friend-explains-its-from-a-website-2",
                  "copy": {
                    "type": "text",
                    "id": "her-friend-explains-its-from-a-website",
                    "text": "Her friend explains it’s from a website that shows the seasonal cycle through light and shadow."
                  },
                  "media": {
                    "type": "image",
                    "id": "designing-a-seasonal-journey-1d5b9190-dcfb-424d-be02-86331864511-2",
                    "src": "/img/project-4/1d5b9190-dcfb-424d-be02-863318645113-2.svg",
                    "alt": "Her friend explains it’s from a website — design study",
                    "width": 241.0,
                    "height": 219.0
                  }
                },
                {
                  "type": "figure",
                  "id": "the-shadow-visualization-matches-what-she-sees-2",
                  "caption": {
                    "type": "text",
                    "id": "the-shadow-visualization-matches-what-she-sees",
                    "text": "The shadow visualization matches what she sees out her own window."
                  },
                  "media": {
                    "type": "image",
                    "id": "designing-a-seasonal-journey-chatgpt-image-dec-1-2025-11-15-33-p",
                    "src": "/img/project-4/chatgpt-image-dec-1--2025--11-15-33-pm-1.svg",
                    "alt": "The shadow visualization matches what she sees — design study",
                    "width": 243.0,
                    "height": 219.0
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "bringing-the-experience-to-life",
      "title": "Bringing the Experience to Life",
      "takeaway": [
        {"text": "A seasonal dial and procedural animation make "},
        {"text": "time navigable and seasonal change visible", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "pair",
          "id": "final-prototype-showcase",
          "copy": {
            "type": "group",
            "id": "final-prototype-heading",
            "items": [
              {"type": "heading", "id": "final-prototype-title", "text": "Final Prototype"},
              {
                "type": "link",
                "id": "final-prototype-link",
                "text": "Try the prototype",
                "href": "https://24-solar-terms-eta.vercel.app/intro"
              }
            ]
          },
          "media": {
            "type": "group",
            "id": "final-prototype-recordings",
            "items": [
              {
                "type": "video",
                "id": "prototype-landing-recording",
                "label": "Landing",
                "src": "/videos/project-4/prototype-landing.mp4",
                "poster": "/videos/project-4/prototype-landing-poster.jpg",
                "alt": "Final prototype recording: exploring the Solar Terms on the landing page",
                "width": 1920,
                "height": 1198
              },
              {
                "type": "video",
                "id": "prototype-intro-recording",
                "label": "Intro",
                "src": "/videos/project-4/prototype-intro.mp4",
                "poster": "/videos/project-4/prototype-intro-poster.jpg",
                "alt": "Final prototype recording: the introduction to A Living Calendar",
                "width": 1920,
                "height": 1198
              },
              {
                "type": "video",
                "id": "prototype-term-detail-recording",
                "label": "Term Details",
                "src": "/videos/project-4/prototype-term-detail.mp4",
                "poster": "/videos/project-4/prototype-term-detail-poster.jpg",
                "alt": "Final prototype recording: exploring a Solar Term's details",
                "width": 1920,
                "height": 1198
              },
              {
                "type": "video",
                "id": "prototype-calendar-recording",
                "label": "Calendar",
                "src": "/videos/project-4/prototype-calendar.mp4",
                "poster": "/videos/project-4/prototype-calendar-poster.jpg",
                "alt": "Final prototype recording: exploring the year calendar",
                "width": 1920,
                "height": 1198
              }
            ]
          }
        },
        {
          "type": "group",
          "id": "i-explored-several-approaches-for-presenting-the-4",
          "items": [
            {
              "type": "columns",
              "id": "dial-navigation-3",
              "items": [
                {
                  "type": "group",
                  "id": "dial-navigation-2",
                  "items": [
                    {"type": "text", "id": "dial-navigation", "text": "Dial Navigation"},
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-screenshot-2026-02-23-at-17-51-5",
                      "src": "/img/project-4/screenshot-2026-02-23-at-17-51-51-1.svg",
                      "alt": "Dial Navigation — design study",
                      "width": 121.0,
                      "height": 118.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-screenshot-2026-04-09-at-04-23-4",
                      "src": "/img/project-4/screenshot-2026-04-09-at-04-23-44-1.svg",
                      "alt": "Dial Navigation — design study",
                      "width": 121.0,
                      "height": 117.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-screenshot-2026-04-09-at-04-28-0",
                      "src": "/img/project-4/screenshot-2026-04-09-at-04-28-06-1.svg",
                      "alt": "Dial Navigation — design study",
                      "width": 121.0,
                      "height": 117.0
                    }
                  ]
                },
                {
                  "type": "group",
                  "id": "solar-term-details-page-2",
                  "items": [
                    {"type": "text", "id": "solar-term-details-page", "text": "Solar Term Details Page"},
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-screenshot-2026-04-09-at-04-30-1",
                      "src": "/img/project-4/screenshot-2026-04-09-at-04-30-12-1.svg",
                      "alt": "Solar Term Details Page — design study",
                      "width": 186.0,
                      "height": 121.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-screenshot-2026-04-09-at-04-29-1",
                      "src": "/img/project-4/screenshot-2026-04-09-at-04-29-19-1.svg",
                      "alt": "Solar Term Details Page — design study",
                      "width": 186.0,
                      "height": 116.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-image-50",
                      "src": "/img/project-4/solar-term-details-iteration-03.png",
                      "alt": "Solar Term Details Page — Iteration 03, Winter Solstice rituals",
                      "width": 3024,
                      "height": 1890
                    }
                  ]
                },
                {
                  "type": "group",
                  "id": "calendar-2",
                  "items": [
                    {"type": "text", "id": "calendar", "text": "Calendar"},
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-macbook-pro-14-86-1",
                      "src": "/img/project-4/macbook-pro-14----86-1.svg",
                      "alt": "Calendar — design study",
                      "width": 188.0,
                      "height": 118.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-screenshot-2026-03-02-at-21-15-2",
                      "src": "/img/project-4/screenshot-2026-03-02-at-21-15-21-1.svg",
                      "alt": "Calendar — design study",
                      "width": 188.0,
                      "height": 117.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-screenshot-2026-04-09-at-04-34-2",
                      "src": "/img/project-4/screenshot-2026-04-09-at-04-34-25-1.svg",
                      "alt": "Calendar — design study",
                      "width": 188.0,
                      "height": 117.0
                    }
                  ]
                },
                {
                  "type": "group",
                  "id": "shadows-2",
                  "items": [
                    {"type": "text", "id": "shadows", "text": "Shadows"},
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-image-37-1",
                      "src": "/img/project-4/image-37-1.svg",
                      "alt": "Shadows — design study",
                      "width": 164.0,
                      "height": 93.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-image-44",
                      "src": "/img/project-4/image-44.svg",
                      "alt": "Shadows — design study",
                      "width": 164.0,
                      "height": 157.0
                    },
                    {
                      "type": "image",
                      "id": "bringing-the-experience-to-life-image-51",
                      "src": "/img/project-4/image-51.svg",
                      "alt": "Shadows — design study",
                      "width": 164.0,
                      "height": 103.0
                    }
                  ]
                }
              ]
            },
            {
              "type": "group",
              "id": "technical-prototyping-studies",
              "items": [
                {
                  "type": "pair",
                  "id": "technical-prototyping-with-p5-js-3",
                  "copy": {
                    "type": "group",
                    "id": "technical-prototyping-with-p5-js-2",
                    "items": [
                      {"type": "text", "id": "technical-prototyping-with-p5-js", "text": "Technical Prototyping with p5.js"},
                      {"type": "label", "id": "simulating-seasonal-change", "text": "Simulating Seasonal Change"},
                      {
                        "type": "text",
                        "id": "to-communicate-seasonal-transitions-more-naturally-i",
                        "text": [
                          {
                            "text": "To communicate seasonal transitions more naturally, I experimented with procedural animation using p5.js.",
                            "strong": true,
                            "tone": "muted"
                          },
                          {"text": "\n \n"},
                          {"text": "Grass Animation: Procedural growth, Wind simulation, Seasonal transitions ", "tone": "olive"},
                          {"text": "\n"},
                          {"text": "Weather Effects: Rain, Snow, Frost", "tone": "olive"},
                          {"text": "\n"},
                          {"text": "Dynamic Interpolation: Smooth transitions between terms, Continuous seasonal progression", "tone": "olive"}
                        ]
                      }
                    ]
                  },
                  "media": {
                    "type": "image",
                    "id": "bringing-the-experience-to-life-image-45",
                    "src": "/img/project-4/image-45.svg",
                    "alt": "Technical Prototyping with p5.js — design study",
                    "width": 422.0,
                    "height": 257.0
                  }
                },
                {
                  "type": "pair",
                  "id": "building-the-navigation-system-3",
                  "copy": {
                    "type": "group",
                    "id": "building-the-navigation-system-2",
                    "items": [
                      {"type": "text", "id": "building-the-navigation-system", "text": "Building the Navigation System"},
                      {"type": "label", "id": "interactive-solar-term-dial", "text": "Interactive Solar Term Dial"},
                      {
                        "type": "text",
                        "id": "the-dial-became-the-primary-navigation-system",
                        "text": [
                          {"text": "The dial became the primary navigation system.", "strong": true, "tone": "muted"},
                          {"text": "\n \n"},
                          {"text": "Solar longitude visualization", "tone": "olive"},
                          {"text": "\n"},
                          {"text": "Seasonal progression", "tone": "olive"},
                          {"text": "\n"},
                          {"text": "Drag interaction", "tone": "olive"},
                          {"text": "\n"},
                          {"text": "Direct access to Solar Term pages", "tone": "olive"}
                        ]
                      }
                    ]
                  },
                  "media": {
                    "type": "image",
                    "id": "bringing-the-experience-to-life-image-47",
                    "src": "/img/project-4/image-47.svg",
                    "alt": "Building the Navigation System — design study",
                    "width": 418.0,
                    "height": 254.0
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "from-prototype-to-product",
      "title": [
        {"text": "From Prototype to a "},
        {"text": "Working Website", "tone": "highlight"}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "final-implementation-3",
          "items": [
            {
              "type": "group",
              "id": "final-implementation-2",
              "items": [
                {
                  "type": "text",
                  "id": "after-validating-the-interaction-concepts-through-prototyping",
                  "text": "I used vibe coding to build the animations, dial, and year calendar shown below."
                }
              ]
            },
            {
              "type": "figure",
              "id": "grass-vibe-coding-2",
              "caption": {"type": "text", "id": "grass-vibe-coding", "text": "Grass vibe coding"},
              "media": {
                "type": "columns",
                "id": "grass-demonstration-media",
                "items": [
                  {
                    "type": "video",
                    "id": "grass-interaction-recording",
                    "src": "/videos/project-4/grass-seasonal.mp4",
                    "poster": "/videos/project-4/grass-seasonal-poster.jpg",
                    "alt": "Grass animation across the seasons",
                    "width": 1600,
                    "height": 1000
                  },
                  {
                    "type": "group",
                    "id": "grass-implementation-code",
                    "items": [
                      {
                        "type": "image",
                        "id": "from-prototype-to-product-screenshot-2026-05-16-at-19-45-16-1",
                        "src": "/img/project-4/screenshot-2026-05-16-at-19-45-16-1.svg",
                        "alt": "Weather effects implementation code",
                        "label": "Weather effects",
                        "width": 182,
                        "height": 132
                      },
                      {
                        "type": "image",
                        "id": "from-prototype-to-product-screenshot-2026-05-16-at-19-44-58-1",
                        "src": "/img/project-4/screenshot-2026-05-16-at-19-44-58-1.svg",
                        "alt": "Seasonal transitions implementation code",
                        "label": "Seasonal transitions",
                        "width": 182,
                        "height": 132
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "figure",
              "id": "dial-navigation-vibe-coding-2",
              "caption": {"type": "text", "id": "dial-navigation-vibe-coding", "text": "Dial navigation vibe coding"},
              "media": {
                "type": "columns",
                "id": "dial-demonstration-media",
                "items": [
                  {
                    "type": "video",
                    "id": "dial-interaction-recording",
                    "src": "/videos/project-4/dial.mp4",
                    "poster": "/videos/project-4/dial-poster.jpg",
                    "alt": "Dragging the Solar Term dial to explore the seasons",
                    "width": 1600,
                    "height": 1000
                  },
                  {
                    "type": "group",
                    "id": "dial-implementation-code",
                    "items": [
                      {
                        "type": "image",
                        "id": "from-prototype-to-product-screenshot-2026-05-16-at-19-37-08-1",
                        "src": "/img/project-4/screenshot-2026-05-16-at-19-37-08-1.svg",
                        "alt": "Dial navigation implementation code",
                        "label": "Dial navigation",
                        "width": 181,
                        "height": 131
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "figure",
              "id": "year-calendar-aura-effects-2",
              "caption": {"type": "text", "id": "year-calendar-aura-effects", "text": "Year Calendar aura effects"},
              "media": {
                "type": "columns",
                "id": "calendar-demonstration-media",
                "items": [
                  {
                    "type": "video",
                    "id": "calendar-interaction-recording",
                    "src": "/videos/project-4/year-calendar.mp4",
                    "poster": "/videos/project-4/year-calendar-poster.jpg",
                    "alt": "Exploring the year calendar and its seasonal aura effects",
                    "width": 1600,
                    "height": 1000
                  },
                  {
                    "type": "group",
                    "id": "calendar-implementation-code",
                    "items": [
                      {
                        "type": "image",
                        "id": "from-prototype-to-product-screenshot-2026-05-16-at-19-52-11-1",
                        "src": "/img/project-4/screenshot-2026-05-16-at-19-52-11-1.svg",
                        "alt": "Calendar aura effects implementation code",
                        "label": "Calendar aura effects",
                        "width": 180,
                        "height": 130
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "id": "testing-refinement",
      "title": "Testing & Refinement",
      "takeaway": [
        {"text": "Participants understood the seasonal concept, but needed "},
        {"text": "clearer interaction cues", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "to-validate-the-usability-and-experience-of-2",
          "items": [
            {
              "type": "text",
              "id": "to-validate-the-usability-and-experience-of",
              "text": [
                {
                  "text": "I conducted moderated usability testing with ",
                  "tone": "muted"
                },
                {
                  "text": "six participants across three tasks",
                  "strong": true,
                  "tone": "muted"
                },
                {
                  "text": " to evaluate discoverability, navigation, and interaction clarity.",
                  "tone": "muted"
                }
              ]
            },
            {
              "type": "group",
              "id": "testing-change-status",
              "items": [
                {
                  "type": "heading",
                  "id": "testing-change-status-title",
                  "text": "What Changed — and What Remains Proposed"
                },
                {
                  "type": "text",
                  "id": "testing-built-status",
                  "text": [
                    {
                      "text": "Already built: ",
                      "strong": true
                    },
                    {
                      "text": "The circular dial, seasonal animations, and year calendar are shown in the implementation recordings."
                    }
                  ]
                },
                {
                  "type": "text",
                  "id": "testing-post-test-status",
                  "text": [
                    {
                      "text": "Changes after testing: ",
                      "strong": true
                    },
                    {
                      "text": "No completed fixes or follow-up test results are documented. The improvements below remain proposals, not validated outcomes."
                    }
                  ]
                }
              ]
            },
            {
              "type": "columns",
              "id": "landing-page-users-understood-the-wheels-cyclical-3",
              "items": [
                {
                  "type": "pair",
                  "id": "landing-page-users-understood-the-wheels-cyclical-2",
                  "copy": {
                    "type": "heading",
                    "id": "landing-page-users-understood-the-wheels-cyclical",
                    "text": "Landing Page"
                  },
                  "findings": [
                    {
                      "type": "text",
                      "id": "testing-landing-concept",
                      "text": [
                        {
                          "text": "Understood: ",
                          "strong": true
                        },
                        {
                          "text": "Participants understood the wheel as a cyclical view of time."
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "testing-landing-friction",
                      "text": [
                        {
                          "text": "Struggled with: ",
                          "strong": true
                        },
                        {
                          "text": "Some participants preferred clicking term labels over dragging; the wheel’s interactive behavior was not obvious."
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "testing-landing-priority",
                      "text": [{"text": "Proposed improvement: ", "strong": true}, {"text": "Add a visible drag cue and direct term selection through labels. Re-test whether both paths are discoverable."}]
                    }
                  ],
                  "media": {
                    "type": "image",
                    "id": "testing-refinement-31-1",
                    "src": "/img/project-4/testing-landing-clean.png",
                    "alt": "Clean landing-page screenshot with clickable date controls and the circular solar-term wheel.",
                    "width": 1512,
                    "height": 945,
                    "annotations": {
                      "notes": [
                        {
                          "number": "1",
                          "side": "left",
                          "position": 25,
                          "title": "Clickable date controls",
                          "text": "Both calendar dates can be clicked, offering a direct way to choose a date."
                        },
                        {
                          "number": "2",
                          "side": "right",
                          "position": 61,
                          "title": "Clicking felt more natural",
                          "text": "One participant tried the term labels instead of dragging the wheel, illustrating the preference for direct selection."
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "pair",
                  "id": "winter-solstice-detail-page-users-understood-the-2",
                  "copy": {
                    "type": "heading",
                    "id": "winter-solstice-detail-page-users-understood-the",
                    "text": "Winter Solstice Detail Page"
                  },
                  "findings": [
                    {
                      "type": "text",
                      "id": "testing-detail-comprehension",
                      "text": [
                        {
                          "text": "Understood: ",
                          "strong": true
                        },
                        {
                          "text": "Participants understood the three solar-term phases and could follow the bilingual content."
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "testing-detail-friction",
                      "text": [
                        {
                          "text": "Struggled with: ",
                          "strong": true
                        },
                        {
                          "text": "Navigation controls and the solar-longitude panel were unclear. Automatic content changes reduced control and obscured the link between the menu and current text."
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "testing-detail-priority",
                      "text": [{"text": "Proposed improvement: ", "strong": true}, {"text": "Label navigation targets, explain solar longitude, and let users change content explicitly rather than automatically."}]
                    }
                  ],
                  "media": {
                    "type": "columns",
                    "id": "testing-refinement-visuals",
                    "items": [
                      {
                        "type": "image",
                        "id": "testing-refinement-36-1",
                        "src": "/img/project-4/testing-winter-solstice-clean.png",
                        "alt": "Clean Winter Solstice detail page with a Back button, solar-longitude panel, content card, and circular navigation.",
                        "annotations": {
                          "notes": [
                            {
                              "number": "3",
                              "side": "left",
                              "position": 14,
                              "title": "A visible, unused exit",
                              "text": "Participants noticed the Back button, but rarely used it."
                            },
                            {
                              "number": "4",
                              "side": "left",
                              "position": 43,
                              "title": "Navigation was expected here",
                              "text": "One participant looked to the solar-term title for navigation."
                            },
                            {
                              "number": "5",
                              "side": "right",
                              "position": 24,
                              "title": "The graphic needed explaining",
                              "text": "The solar-longitude panel needed accompanying text before its meaning was clear."
                            },
                            {
                              "number": "6",
                              "side": "right",
                              "position": 64,
                              "title": "An unclear control",
                              "text": "Participants were unsure how to use the circle or which content it controlled."
                            },
                            {
                              "number": "7",
                              "side": "left",
                              "position": 79,
                              "title": "Autoplay broke the connection",
                              "text": "Text changed automatically, reducing control over reading pace and making the menu-to-content connection hard to follow."
                            }
                          ]
                        },
                        "width": 1512,
                        "height": 945
                      }
                    ]
                  }
                },
                {
                  "type": "pair",
                  "id": "year-calendar-page-users-grasped-the-grids-2",
                  "copy": {
                    "type": "heading",
                    "id": "year-calendar-page-users-grasped-the-grids",
                    "text": "Year Calendar Page"
                  },
                  "findings": [
                    {
                      "type": "text",
                      "id": "testing-calendar-expectations",
                      "text": [
                        {
                          "text": "Understood: ",
                          "strong": true
                        },
                        {
                          "text": "Participants understood the yearly overview; their expectations ranged from date lookup to visual exploration."
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "testing-calendar-friction",
                      "text": [
                        {
                          "text": "Struggled with: ",
                          "strong": true
                        },
                        {
                          "text": "The date toggle was overlooked, wheel-to-grid links were unclear, and some interactions felt disconnected."
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "testing-calendar-priority",
                      "text": [{"text": "Proposed improvement: ", "strong": true}, {"text": "Label the date toggle, show its current state, and clarify the relationship between the wheel and grid."}]
                    }
                  ],
                  "media": {
                    "type": "columns",
                    "id": "testing-refinement-visuals-2",
                    "items": [
                      {
                        "type": "image",
                        "id": "testing-refinement-32-1",
                        "src": "/img/project-4/testing-year-calendar-clean.png",
                        "alt": "Clean year-calendar screenshot showing seasonal color bands, daily dates, and the TEXT / 日期 toggle.",
                        "width": 1512,
                        "height": 945,
                        "annotations": {
                          "notes": [
                            {
                              "number": "8",
                              "side": "right",
                              "position": 18,
                              "title": "A hidden date toggle",
                              "text": "The TEXT / 日期 control was overlooked or did not look clickable. Showing or hiding dates was hard to discover."
                            },
                            {
                              "number": "9",
                              "side": "left",
                              "position": 65,
                              "title": "Two ways to read the calendar",
                              "text": "Some participants wanted a practical date tool; others valued the seasonal color experience."
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a-living-calendar",
      "title": "A Living Calendar",
      "takeaway": [
        {"text": "An interactive calendar brings "},
        {"text": "ecology, culture, and personal reflection", "strong": true, "tone": "highlight"},
        {"text": " together."}
      ],
      "blocks": [
        {
          "type": "group",
          "id": "https-24-solar-terms-eta-vercel-app-intro-4",
          "items": [
            {
              "type": "link",
              "id": "https-24-solar-terms-eta-vercel-app-intro-2",
      "text": "Explore the live calendar ↗",
              "href": "https://24-solar-terms-eta.vercel.app/intro"
            },
            {
              "type": "pair",
              "id": "the-ecological-layer-which-shows-changes-in-2",
              "copy": {
                "type": "text",
                "id": "the-ecological-layer-which-shows-changes-in",
                "text": [
                  {"text": "The ", "tone": "muted"},
                  {"text": "Ecological Layer", "tone": "green"},
                  {"text": ", which shows changes in daylight, shadows, and seasonal signals.", "tone": "muted"}
                ]
              },
              "media": {
                "type": "image",
                "id": "a-living-calendar-frame-1437254446",
                "src": "/img/project-4/frame-1437254446.svg",
                "alt": "The Ecological Layer, which shows changes in — design study",
                "width": 706.0,
                "height": 192.0
              }
            },
            {
              "type": "text",
              "id": "the-cultural-layer-where-each-solar-terms",
              "text": [
                {"text": "The ", "tone": "muted"},
                {"text": "Cultural Layer", "tone": "teal"},
                {"text": ", where each Solar Term’s stories, poem, and traditions come alive.", "tone": "muted"}
              ]
            },
            {
              "type": "columns",
              "id": "rituals-3",
              "items": [
                {
                  "type": "figure",
                  "id": "rituals-2",
                  "caption": {"type": "label", "id": "rituals", "text": "Rituals"},
                  "media": {
                    "type": "image",
                    "id": "a-living-calendar-frame-153-1",
                    "src": "/img/project-4/frame-153-1.svg",
                    "alt": "Rituals — design study",
                    "width": 521.0,
                    "height": 240.0
                  }
                },
                {
                  "type": "group",
                  "id": "3-phases-3",
                  "items": [
                    {
                      "type": "figure",
                      "id": "3-phases-2",
                      "caption": {"type": "label", "id": "3-phases", "text": "3 Phases"},
                      "media": {
                        "type": "columns",
                        "id": "a-living-calendar-visuals",
                        "items": [
                          {
                            "type": "image",
                            "id": "a-living-calendar-screenshot-2026-04-22-at-23-41-12-1",
                            "src": "/img/project-4/screenshot-2026-04-22-at-23-41-12-1.svg",
                            "alt": "3 Phases — design study",
                            "width": 177.0,
                            "height": 136.0
                          },
                          {
                            "type": "image",
                            "id": "a-living-calendar-screenshot-2026-04-22-at-23-41-02-1",
                            "src": "/img/project-4/screenshot-2026-04-22-at-23-41-02-1.svg",
                            "alt": "3 Phases — design study",
                            "width": 188.0,
                            "height": 137.0
                          },
                          {
                            "type": "image",
                            "id": "a-living-calendar-screenshot-2026-04-22-at-23-39-48-1",
                            "src": "/img/project-4/screenshot-2026-04-22-at-23-39-48-1.svg",
                            "alt": "3 Phases — design study",
                            "width": 187.0,
                            "height": 137.0
                          }
                        ]
                      }
                    },
                    {
                      "type": "figure",
                      "id": "poems-2",
                      "caption": {"type": "label", "id": "poems", "text": "Poems"},
                      "media": {
                        "type": "columns",
                        "id": "a-living-calendar-visuals-2",
                        "items": [
                          {
                            "type": "image",
                            "id": "a-living-calendar-screenshot-2026-04-22-at-23-40-14-1",
                            "src": "/img/project-4/screenshot-2026-04-22-at-23-40-14-1.svg",
                            "alt": "Poems — design study",
                            "width": 165.0,
                            "height": 73.0
                          },
                          {
                            "type": "image",
                            "id": "a-living-calendar-screenshot-2026-04-22-at-23-40-30-1",
                            "src": "/img/project-4/screenshot-2026-04-22-at-23-40-30-1.svg",
                            "alt": "Poems — design study",
                            "width": 202.0,
                            "height": 73.0
                          },
                          {
                            "type": "image",
                            "id": "a-living-calendar-screenshot-2026-04-22-at-23-40-47-1",
                            "src": "/img/project-4/screenshot-2026-04-22-at-23-40-47-1.svg",
                            "alt": "Poems — design study",
                            "width": 181.0,
                            "height": 73.0
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "pair",
              "id": "the-personal-layer-which-encourages-users-experience-2",
              "copy": {
                "type": "text",
                "id": "the-personal-layer-which-encourages-users-experience",
                "text": [
                  {"text": "The ", "tone": "muted"},
                  {"text": "Personal Layer", "tone": "coral"},
                  {"text": ", which encourages users experience the season on their own.", "tone": "muted"}
                ]
              },
              "media": {
                "type": "columns",
                "id": "a-living-calendar-visuals-3",
                "items": [
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-47-55-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-47-55-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 247.0,
                    "height": 91.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-47-48-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-47-48-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 246.0,
                    "height": 92.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-47-20-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-47-20-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 248.0,
                    "height": 92.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-47-12-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-47-12-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 248.0,
                    "height": 93.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-46-53-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-46-53-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 249.0,
                    "height": 92.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-46-59-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-46-59-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 248.0,
                    "height": 92.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-47-40-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-47-40-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 246.0,
                    "height": 91.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-47-27-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-47-27-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 246.0,
                    "height": 92.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-46-39-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-46-39-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 249.0,
                    "height": 91.0
                  },
                  {
                    "type": "image",
                    "id": "a-living-calendar-screenshot-2026-04-22-at-23-46-47-1",
                    "src": "/img/project-4/screenshot-2026-04-22-at-23-46-47-1.svg",
                    "alt": "The Personal Layer, which encourages users experience — design study",
                    "width": 251.0,
                    "height": 92.0
                  }
                ]
              }
            },
            {"type": "text", "id": "navigation-system", "text": "Navigation System"},
            {"type": "text", "id": "dial-calendar", "text": "Dial\nCalendar"},
            {
              "type": "columns",
              "id": "a-living-calendar-visuals-4",
              "items": [
                {
                  "type": "image",
                  "id": "a-living-calendar-screenshot-2026-05-09-at-17-46-29-1",
                  "src": "/img/project-4/screenshot-2026-05-09-at-17-46-29-1.svg",
                  "alt": "Navigation System — design study",
                  "width": 351.0,
                  "height": 219.0
                },
                {
                  "type": "image",
                  "id": "a-living-calendar-screenshot-2026-05-09-at-17-39-25-1",
                  "src": "/img/project-4/screenshot-2026-05-09-at-17-39-25-1.svg",
                  "alt": "Navigation System — design study",
                  "width": 351.0,
                  "height": 219.0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "reflection",
      "title": "Reflection",
      "takeaway": [
        {"text": "Experimental interactions need "},
        {"text": "clarity and atmosphere to work together", "strong": true, "tone": "highlight"},
        {"text": "."}
      ],
      "blocks": [
        {
          "type": "columns",
          "id": "1-3",
          "items": [
            {
              "type": "group",
              "id": "1-2",
              "items": [
                {"type": "text", "id": "1", "text": "1"},
                {
                  "type": "text",
                  "id": "designing-this-website-made-me-more-aware",
                  "text": "Understanding the seasonal metaphor did not make its controls discoverable."
                }
              ]
            },
            {
              "type": "group",
              "id": "2-2",
              "items": [
                {"type": "text", "id": "2", "text": "2"},
                {
                  "type": "text",
                  "id": "i-was-constantly-balancing-clarity-with-atmosphere",
                  "text": "The dial supports exploration; the year calendar supports date lookup. Both need clear interaction cues."
                }
              ]
            },
            {
              "type": "group",
              "id": "3-2",
              "items": [
                {"type": "text", "id": "3", "text": "3"},
                {
                  "type": "text",
                  "id": "rather-than-treating-usability-and-aesthetics-as",
                  "text": "Next, test whether clearer labels and user-controlled content resolve the observed friction."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
