// obj

let dateToday = new Date();
let currentYear = dateToday.getFullYear();
let yearOfBirth = 1982;
let age = currentYear - yearOfBirth;

let newObj = {
    name: 'Romero Lijkwan',
    job: 'Frontend developer',
    age: age,
    status: "In a relationship",
    location: "Rotterdam",
    projects: ['VBEL.NL', 'WSLM.NL', 'MGA media', 'MAB Online', 'AOA autoverzekeringen', <img src="images/roms.png" />]
};

let section1 = (
    <section id="sectionOne">        
        <div id="divRowOne">
            <div id="divColumnTwo">
                <h1 id="header">{newObj.name}</h1>
                <p id="pColumnTwo">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad     minim veniam, quis nostrud exercitation ullamco laboris nisi ut     aliquip ex ea commodo consequat. Duis aute irure dolor in   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in     culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div id="divColumnOne">
                <p id="pColumnOne">
                    {newObj.projects[5]}
                </p>                
            </div>
        </div>
        <div id="divRowTwo">
            <div id="divColumnThree">
                <h2 class="headerProject">Projecten</h2>
                <p id="pColumnThree">
                    {newObj.projects[0]} < br/>
                    {newObj.projects[1]} < br/>
                    {newObj.projects[2]} < br/>
                    {newObj.projects[3]} < br/>
                    {newObj.projects[4]} 
                </p>
                <h2 class="headerProject">Contact</h2>
                <p id="pColumnThree">
                    <i class="fas fa-map-marker-alt"></i> Lorem ipsum< br/>< br/>
                    <i class="fas fa-mobile-alt"></i> Lorem ipsum< br/>< br/>
                    <i class="fas fa-at"></i> Lorem ipsum< br/>< br/>
                </p>
                <h2 class="headerProject">Skills</h2>
                <p id="pColumnThree">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                </p>
            </div>
            <div id="divColumnFour">
                <h2 id="headerTwo">Werkervaring</h2>
                <p id="pColumnFour">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim  id est laborum." 
                </p>
                <h2>Opleiding</h2>
                <p id="pColumnFour">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                </p>
            </div>        
        </div>
    </section>
);

let indexDiv = document.getElementById('reactResume');
ReactDOM.render(section1, indexDiv);
