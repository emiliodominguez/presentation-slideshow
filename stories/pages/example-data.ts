export const exampleData = (dark: boolean) => [
    {
        lang: "es-ar",
        data: {
            project_title: [
                {
                    type: "heading1",
                    text: "Demo de la presentación"
                }
            ],
            project_description: [
                {
                    type: "paragraph",
                    text: "Algún texto descriptivo sobre el proyecto."
                }
            ],
            body: [
                {
                    slice_type: "title_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Intro"
                            }
                        ],
                        slide_logo: {
                            url: `/assets/logos/logo_${dark ? "dark" : "light"}.png`
                        },
                        slide_title: [
                            {
                                type: "heading2",
                                text: "El nombre de la presentación"
                            }
                        ],
                        slide_description: [
                            {
                                type: "paragraph",
                                text: "Una breve descripción de lo que se va a hablar"
                            }
                        ]
                    }
                },
                {
                    slice_type: "agenda_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Agenda"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "Agenda"
                            }
                        ],
                        slide_content: [
                            {
                                type: "o-list-item",
                                text: "Capítulo 1"
                            },
                            {
                                type: "o-list-item",
                                text: "Capítulo 2"
                            },
                            {
                                type: "o-list-item",
                                text: "Capítulo 3"
                            },
                            {
                                type: "o-list-item",
                                text: "Capítulo 4"
                            },
                            {
                                type: "o-list-item",
                                text: "Capítulo 5"
                            }
                        ]
                    }
                },
                {
                    slice_type: "chapter_intro_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Capítulo 1"
                            }
                        ],
                        slide_chapter_number: 1,
                        slide_subtitle: [
                            {
                                type: "paragraph",
                                text: "El subheader del capítulo"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "El título del capítulo"
                            }
                        ]
                    }
                },
                {
                    slice_type: "team_slide",
                    items: [
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Miembro del equípo 1"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Project Manager"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_1@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Miembro del equípo 2"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Team Lead"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_2@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Miembro del equípo 3"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_3@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Miembro del equípo 4"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_4@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Miembro del equípo 5"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_5@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Miembro del equípo 6"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_5@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        }
                    ],
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Equipo"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "Equipo"
                            }
                        ]
                    }
                },
                {
                    slice_type: "elements_slide",
                    items: [
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Elemento 1"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Elemento 2"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Elemento 3"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Elemento 4"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Elemento 5"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Elemento 6"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        }
                    ],
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Grilla de elementos"
                            }
                        ]
                    }
                },
                {
                    slice_type: "quote_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Frase"
                            }
                        ],
                        slide_thumbnail: {
                            url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                        },
                        slide_quote: [
                            {
                                type: "paragraph",
                                text: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim facere tenetur praesentium repellendus laudantium dicta voluptatum nemo in voluptate architecto rem debitis at ex, ipsam, laboriosam placeat officiis cum ratione consectetur velit reiciendis. Rem maxime, ratione illo delectus voluptate explicabo ab quaerat sequi, quo corporis culpa ea porro, sed eius!”'
                            }
                        ],
                        slide_name: [
                            {
                                type: "heading3",
                                text: "Lorem Ipsum"
                            }
                        ],
                        slide_title: [
                            {
                                type: "paragraph",
                                text: "Poeta & Developer"
                            }
                        ],
                        slide_email: [
                            {
                                type: "paragraph",
                                text: "lorem_ipsum@mail.com"
                            }
                        ],
                        slide_phone: [
                            {
                                type: "paragraph",
                                text: "+15555555555"
                            }
                        ]
                    }
                },
                {
                    slice_type: "key_figures_slide",
                    items: [
                        {
                            key_figure_icon: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            key_figure_value: [
                                {
                                    type: "paragraph",
                                    text: "20%"
                                }
                            ],
                            key_figure_title: [
                                {
                                    type: "heading3",
                                    text: "Punto clave 1"
                                }
                            ],
                            key_figure_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                                }
                            ]
                        },
                        {
                            key_figure_icon: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            key_figure_value: [
                                {
                                    type: "paragraph",
                                    text: "200dpi"
                                }
                            ],
                            key_figure_title: [
                                {
                                    type: "heading3",
                                    text: "Punto clave 2"
                                }
                            ],
                            key_figure_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                                }
                            ]
                        },
                        {
                            key_figure_icon: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            key_figure_value: [
                                {
                                    type: "paragraph",
                                    text: "200%"
                                }
                            ],
                            key_figure_title: [
                                {
                                    type: "heading3",
                                    text: "Punto clave 3"
                                }
                            ],
                            key_figure_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                                }
                            ]
                        }
                    ],
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Puntos clave"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "El título del slide"
                            }
                        ],
                        slide_subtitle: [
                            {
                                type: "paragraph",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto quae odit at aut, dolorem consectetur ullam maxime pariatur a illum, dolore sequi autem quo?"
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        lang: "en-gb",
        data: {
            project_title: [
                {
                    type: "heading1",
                    text: "Demo de la presentación"
                }
            ],
            project_description: [
                {
                    type: "paragraph",
                    text: "Algún texto descriptivo sobre el proyecto."
                }
            ],
            body: [
                {
                    slice_type: "title_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Intro"
                            }
                        ],
                        slide_logo: {
                            url: `/assets/logos/logo_${dark ? "dark" : "light"}.png`
                        },
                        slide_title: [
                            {
                                type: "heading2",
                                text: "The presentation's name"
                            }
                        ],
                        slide_description: [
                            {
                                type: "paragraph",
                                text: "A brief description of the talk's topic"
                            }
                        ]
                    }
                },
                {
                    slice_type: "agenda_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Agenda"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "Agenda"
                            }
                        ],
                        slide_content: [
                            {
                                type: "o-list-item",
                                text: "Chapter 1"
                            },
                            {
                                type: "o-list-item",
                                text: "Chapter 2"
                            },
                            {
                                type: "o-list-item",
                                text: "Chapter 3"
                            },
                            {
                                type: "o-list-item",
                                text: "Chapter 4"
                            },
                            {
                                type: "o-list-item",
                                text: "Chapter 5"
                            }
                        ]
                    }
                },
                {
                    slice_type: "chapter_intro_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Chapter 1"
                            }
                        ],
                        slide_chapter_number: 1,
                        slide_subtitle: [
                            {
                                type: "paragraph",
                                text: "The chapter's subheader"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "The chapter's title"
                            }
                        ]
                    }
                },
                {
                    slice_type: "team_slide",
                    items: [
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Team member 1"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Project Manager"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_1@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Team member 2"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Team Lead"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_2@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Team member 3"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_3@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Team member 4"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_4@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Team member 5"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_5@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        },
                        {
                            team_member_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                            },
                            team_member_name: [
                                {
                                    type: "heading3",
                                    text: "Team member 6"
                                }
                            ],
                            team_member_title: [
                                {
                                    type: "paragraph",
                                    text: "Developer"
                                }
                            ],
                            team_member_email: [
                                {
                                    type: "paragraph",
                                    text: "team_member_5@mail.com"
                                }
                            ],
                            team_member_phone: [
                                {
                                    type: "paragraph",
                                    text: "+544444444444"
                                }
                            ]
                        }
                    ],
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Team"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "Team"
                            }
                        ]
                    }
                },
                {
                    slice_type: "elements_slide",
                    items: [
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Element 1"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Element 2"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Element 3"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Element 4"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Element 5"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        },
                        {
                            grid_item_thumbnail: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            grid_item_title: [
                                {
                                    type: "heading3",
                                    text: "Element 6"
                                }
                            ],
                            grid_item_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur ullam harum, temporibus doloremque ex sequi debitis. Distinctio, doloremque facilis."
                                }
                            ]
                        }
                    ],
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Elements grid"
                            }
                        ]
                    }
                },
                {
                    slice_type: "quote_slide",
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Quote"
                            }
                        ],
                        slide_thumbnail: {
                            url: `/assets/logos/isologo_${dark ? "white" : "black"}.png`
                        },
                        slide_quote: [
                            {
                                type: "paragraph",
                                text: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim facere tenetur praesentium repellendus laudantium dicta voluptatum nemo in voluptate architecto rem debitis at ex, ipsam, laboriosam placeat officiis cum ratione consectetur velit reiciendis. Rem maxime, ratione illo delectus voluptate explicabo ab quaerat sequi, quo corporis culpa ea porro, sed eius!”'
                            }
                        ],
                        slide_name: [
                            {
                                type: "heading3",
                                text: "Lorem Ipsum"
                            }
                        ],
                        slide_title: [
                            {
                                type: "paragraph",
                                text: "Poet & Developer"
                            }
                        ],
                        slide_email: [
                            {
                                type: "paragraph",
                                text: "lorem_ipsum@mail.com"
                            }
                        ],
                        slide_phone: [
                            {
                                type: "paragraph",
                                text: "+15555555555"
                            }
                        ]
                    }
                },
                {
                    slice_type: "key_figures_slide",
                    items: [
                        {
                            key_figure_icon: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            key_figure_value: [
                                {
                                    type: "paragraph",
                                    text: "20%"
                                }
                            ],
                            key_figure_title: [
                                {
                                    type: "heading3",
                                    text: "Key figure 1"
                                }
                            ],
                            key_figure_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                                }
                            ]
                        },
                        {
                            key_figure_icon: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            key_figure_value: [
                                {
                                    type: "paragraph",
                                    text: "200dpi"
                                }
                            ],
                            key_figure_title: [
                                {
                                    type: "heading3",
                                    text: "Key figure 2"
                                }
                            ],
                            key_figure_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                                }
                            ]
                        },
                        {
                            key_figure_icon: {
                                url: `/assets/logos/isologo_${dark ? "black" : "white"}.png`
                            },
                            key_figure_value: [
                                {
                                    type: "paragraph",
                                    text: "200%"
                                }
                            ],
                            key_figure_title: [
                                {
                                    type: "heading3",
                                    text: "Key figure 3"
                                }
                            ],
                            key_figure_content: [
                                {
                                    type: "paragraph",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                                }
                            ]
                        }
                    ],
                    primary: {
                        dark_theme_enabled: dark,
                        slide_navigation_id: [
                            {
                                type: "heading4",
                                text: "Key figures"
                            }
                        ],
                        slide_title: [
                            {
                                type: "heading2",
                                text: "The slide title"
                            }
                        ],
                        slide_subtitle: [
                            {
                                type: "paragraph",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto quae odit at aut, dolorem consectetur ullam maxime pariatur a illum, dolore sequi autem quo?"
                            }
                        ]
                    }
                }
            ]
        }
    }
];
