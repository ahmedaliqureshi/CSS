const scrollRevealOption= {
    distance:"50px",
    origin:"button",
    duration:1000,
};

scrollRevealOption().reveal("",{
    duration:1000,
    delay:1000,

});

scrollRevealOption().reveal(".container rolex_logo",{
    duration:1000,
    delay:1000,

});

scrollRevealOption().reveal(".container watch",{
    duration:1000,
    delay:15000,

});

scrollRevealOption().reveal(".container text_right",{
    ...scrollRevealOption,
    duration:1000,
    delay:2000,

});

scrollRevealOption().reveal(".container text_left",{
    ...scrollRevealOption,
    duration:1000,
    delay:25000,

});

scrollRevealOption().reveal(".container btn explore",{
    duration:1000,
    delay:30000,

});