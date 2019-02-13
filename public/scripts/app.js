'use strict';

// obj

var dateToday = new Date();
var currentYear = dateToday.getFullYear();
var yearOfBirth = 1982;
var age = currentYear - yearOfBirth;

var newObj = {
    name: 'Romero Lijkwan',
    job: 'Frontend developer',
    age: age,
    status: "In a relationship",
    location: "Rotterdam",
    projects: ['VBEL.NL', 'WSLM.NL', 'MGA media', 'MAB Online', 'AOA autoverzekeringen', React.createElement('img', { src: 'images/roms.png' })]
};

var section1 = React.createElement(
    'section',
    { id: 'sectionOne' },
    React.createElement(
        'div',
        { id: 'divRowOne' },
        React.createElement(
            'div',
            { id: 'divColumnTwo' },
            React.createElement(
                'h1',
                { id: 'header' },
                newObj.name
            ),
            React.createElement(
                'p',
                { id: 'pColumnTwo' },
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam, quis nostrud exercitation ullamco laboris nisi ut     aliquip ex ea commodo consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in     culpa qui officia deserunt mollit anim id est laborum."'
            )
        ),
        React.createElement(
            'div',
            { id: 'divColumnOne' },
            React.createElement(
                'p',
                { id: 'pColumnOne' },
                newObj.projects[5]
            )
        )
    ),
    React.createElement(
        'div',
        { id: 'divRowTwo' },
        React.createElement(
            'div',
            { id: 'divColumnThree' },
            React.createElement(
                'h2',
                { 'class': 'headerProject' },
                'Projecten'
            ),
            React.createElement(
                'p',
                { id: 'pColumnThree' },
                newObj.projects[0],
                ' ',
                React.createElement('br', null),
                newObj.projects[1],
                ' ',
                React.createElement('br', null),
                newObj.projects[2],
                ' ',
                React.createElement('br', null),
                newObj.projects[3],
                ' ',
                React.createElement('br', null),
                newObj.projects[4]
            ),
            React.createElement(
                'h2',
                { 'class': 'headerProject' },
                'Contact'
            ),
            React.createElement(
                'p',
                { id: 'pColumnThree' },
                React.createElement('i', { 'class': 'fas fa-map-marker-alt' }),
                ' Lorem ipsum',
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('i', { 'class': 'fas fa-mobile-alt' }),
                ' Lorem ipsum',
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('i', { 'class': 'fas fa-at' }),
                ' Lorem ipsum',
                React.createElement('br', null),
                React.createElement('br', null)
            ),
            React.createElement(
                'h2',
                { 'class': 'headerProject' },
                'Skills'
            ),
            React.createElement(
                'p',
                { id: 'pColumnThree' },
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."'
            )
        ),
        React.createElement(
            'div',
            { id: 'divColumnFour' },
            React.createElement(
                'h2',
                { id: 'headerTwo' },
                'Werkervaring'
            ),
            React.createElement(
                'p',
                { id: 'pColumnFour' },
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do    eiusmod         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam,         quis nostrud exercitation ullamco laboris nisi ut     aliquip ex ea    commodo    consequat. Duis aute irure dolor in   reprehenderit in voluptate    velit esse    cillum dolore eu fugiat nulla   pariatur. Excepteur sint occaecat    cupidatat non    proident, sunt in     culpa qui officia deserunt mollit anim  id est laborum."'
            ),
            React.createElement(
                'h2',
                null,
                'Opleiding'
            ),
            React.createElement(
                'p',
                { id: 'pColumnFour' },
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do    eiusmod     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam,     quis nostrud exercitation ullamco laboris nisi ut     aliquip ex ea commodo    consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse    cillum dolore eu fugiat nulla   pariatur. Excepteur sint occaecat cupidatat non    proident, sunt in     culpa qui officia deserunt mollit anim id est laborum."'
            )
        )
    )
);

var indexDiv = document.getElementById('reactResume');
ReactDOM.render(section1, indexDiv);
