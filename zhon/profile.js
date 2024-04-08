if (window.location.pathname.includes("profile-main.html")) {
  const userData = localStorage.getItem("auth") || localStorage.getItem("register");
  document.body.innerHTML = `
  <div class="container">
      <div class="arch">
        <div class="arch-pfp">
          <img src="/img/pfp.png" alt="">
        </div>
      </div>

        <div class="navbar-outer">
            <div class="navbar">
                <ul>
                    <li><a href="home.html">Logo</a></li>
                    <li><a href="school.html">МЕКТЕП</a></li>
                    <li><a href="library.html">КІТАПХАНА</a></li>
                    <li><a onclick="openIns()"><img src="img/help (2).png" style="width: 4vh; height: 4vh; padding-top: 1vh;"></a></li>
                    <li><a onclick="openSet()"><img src="img/settings.png" style="width: 4vh; height: 4vh; padding-top: 1vh;"></a></li>
                    <li><a id="profileButton" href="profile-main.html">ПРОФИЛЬ</a></li>
                </ul>
            </div>
        </div>

        <div class="arch-content">
          <h1 id="username">Аты: Қонақ</h1>

          <div class="arch-container">
            <div class="progress">
              <div class="subjects">
                <div class="sbj">Математика</div>
                <div class="sbj">Орыс тілі</div>
                <div class="sbj">Қазақ тілі</div>
                <div class="sbj">Логика</div>
                <div class="sbj">Ағылшын тілі</div>
                <div class="sbj">Хммммм</div>
              </div>
      
              <div class="subject">
                <div class="title">
                  <h2>Progress</h2>
                  <h2 id="sbj-name">Математика</h2>
                </div>
                <div class="content">
                  <div class="sbj-logo"></div>
                  <div class="level">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <!-- The overlay -->
        <div id="ins" class="overlay">

            <!-- Overlay content -->
            <div class="overlay-content">
                <div class="outer-ins">
                    <div><a href="javascript:void(0)" class="closebtn" onclick="closeIns()" style="font-family: Chelsea+Market;">&times;</a></div>
                    <div class="inner-ins">
                        <h2 style="font-size: 5vh; font-family: Hombre;">? Көмек</h2>
                        <div class="bubble">
                            <p style="font-size: 4vh; font-family: Hombre;">Қош келдіңіз!</p>
                        </div>
                        <img src="img/girl.jpg" alt="girl" style="width: 17vh; height: 17vh;">
                        <div class="inst-text-box">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. 
                                <br>
                                Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. 
                                <br>
                                Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. 
                                Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. 
                                <br>
                                Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. 
                                <br>
                                Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. 
                                <br>
                                Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. 
                                <br>
                                Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- The overlay -->
        <div id="set" class="overlay">

            <!-- Overlay content -->
            <div class="overlay-content">
                <div class="outer-ins">
                    <div><a href="javascript:void(0)" class="closebtn" onclick="closeSet()" style="font-family: Chelsea+Market; background-color: #424242;">&times;</a></div>
                    <div class="inner-ins" style="background-color: #4d4d4d;    border: 1.5vh solid #424242; line-height: 1;">
                        <h2 style="font-size: 4.5vh; color: white;">Параметрлер</h2>

                        <div class="box sound-box">
                            <div class="in-box">
                            <h3>Дыбыс</h3></div>
                            <div class="in-box-two">
                                <input class="xdirection" type="range" min="0" max="3" step="0.1" value="1">
                            </div>
                        </div>
                        <div class="box music-box">
                            <div class="in-box">
                            <h3>Ән</h3></div>
                            <div class="in-box-two">
                                <input class="xdirection" type="range" min="0" max="3" step="0.1" value="1">
                            </div>
                        </div>
                        <div class="box pen-col-box">
                            <div class="in-box">
                            <h3>Қалам түсі</h3></div>
                            <div class="in-box-two">
                                <button class="pen red" style="background-color: #FF0000;"></button>
                                <button class="pen orange" style="background-color: #FF7A00;"></button>
                                <button class="pen yellow" style="background-color: #FAFF00;"></button>
                                <button class="pen green" style="background-color: #00FF1A;"></button>
                                <button class="pen skyblue" style="background-color: #00FFFF;"></button>
                                <button class="pen blue" style="background-color: #1400FF;"></button>
                                <button class="pen purple" style="background-color: #9E00FF;"></button>
                                <button class="pen magenta" style="background-color: #FF008A;"></button>
                            </div>
                        </div>
                        <div class="box pen-line-box">
                            <div class="in-box">
                            <h3>Қалам қалыңдығы</h3></div>
                            <div class="in-box-two">
                                <button class="pen"><img src="img/smalline.jpg" alt="s"></button>
                                <button class="pen"><img src="img/midline.jpg" alt="m"></button>
                                <button class="pen"><img src="img/fatline.jpg" alt="l"></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
  if (userData) {
    const user = JSON.parse(userData);
    document.getElementById("username").textContent = `Аты: ${user.username}`;
  }

  for (let i of document.getElementsByClassName("sbj")) {
    i.addEventListener("click", () => {
      for (let j of document.getElementsByClassName("sbj")) {
        j.style.color = "black";
        j.style.background = "white";
      }
      document.getElementById("sbj-name").textContent = i.textContent;
      i.style.color = "white";
      i.style.background = "#187AF6";
    });
  }
}

function openIns() {
  document.getElementById("ins").style.display = "block";
}

/* Close */
function closeIns() {
  document.getElementById("ins").style.display = "none";
}

/* Open */
function openSet() {
  document.getElementById("set").style.display = "block";
}

/* Close */
function closeSet() {
  document.getElementById("set").style.display = "none";
}