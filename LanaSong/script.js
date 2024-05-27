var t = 0
let ansarr = [];
var x = 1;

function updown() {
    if (t == 0) {
        document.title = "‾What Lana Song Are You?‾";
        t = 1;
        setTimeout(updown, 500);
    } else if (t == 1) {
        document.title = "_What Lana Song Are You?_";
        t = 0;
        setTimeout(updown, 500);
    }
}

function addVal(letter) {
    ansarr.push(letter);
    var obj = document.getElementById("qh");
    var a1 = document.getElementById("a");
    var a2 = document.getElementById("b");
    var a3 = document.getElementById("c");
    var a4 = document.getElementById("d");
    if (x == 1) {
        x++;
        obj.innerHTML = "What is your ideal date?";
        a1.value = "Picnic on the beach";
        a2.value = "Movie at home";
        a3.value = "Fine dining";
        a4.value = "Shopping";
    } else if (x == 2) {
        x++;
        obj.innerHTML = "Where would you live given the choice?";
        a1.value = "California";
        a2.value = "New York";
        a3.value = "Texas";
        a4.value = "Florida";
    } else if (x == 3) {
        document.getElementById("an").style.display = "none";
        obj.style.display = "none";
        document.getElementById("res").style.display = "block";
        var ans = document.getElementById("answer");
        var play = document.getElementById("player");
        if (ansarr[0] == 'a') {
            if (ansarr[1] == 'a') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Let The Light In (feat. Father John Misty)<br>Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/LTLI.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Doin' Time<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/doin_time.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "God Bless America - And All The Beautiful Women In It<br>Lust For Life";
                    play.src = "./audios/LFL/GBAAATBWII.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Tulsa Jesus Freak<br>Chemtrails Over The Country Club";
                    play.src = "./audios/COTCC/tulsa_jesus_freak.mp3";
                }
            } else if (ansarr[1] == 'b') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "The Blackest Day<br>Honeymoon";
                    play.src = "./audios/Honeymoon/the_blackest_day.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Brooklyn Baby<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/brooklyn_baby.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "The Other Woman<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/the_other_woman.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Bartender<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/bartender.mp3";
                }
            } else if (ansarr[1] == 'c') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Taco Truck x VB<br>Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/taco_truck_x_vb.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "High By The Beach<br>Honeymoon";
                    play.src = "./audios/Honeymoon/high_by_the_beach.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Money Power Glory<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/money_power_glory.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Florida Kilos<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/florida_kilos.mp3";
                }
            } else if (ansarr[1] == 'd') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "California<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/california.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Lolita<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/lolita.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Art Deco<br>Honeymoon";
                    play.src = "./audios/Honeymoon/art_deco.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Carmen<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/carmen.mp3";
                }
            }
        } else if (ansarr[0] == 'b') {
            if (ansarr[1] == 'a') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Freak<br>Honeymoon";
                    play.src = "./audios/Honeymoon/freak.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Ultraviolence<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/ultraviolence.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Black Bathing Suit<br>Blue Banisters";
                    play.src = "./audios/Blue_Banisters/black_bathing_suit.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Chemtrails Over The Country Club<br>Chemtrails Over The Country Club";
                    play.src = "./audios/COTCC/COTCC.mp3";
                }
            } else if (ansarr[1] == 'b') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Norman fucking Rockwell<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/norman_fucking_rockwell.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Cherry<br>Lust For Life";
                    play.src = "./audios/LFL/cherry.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Blue Jeans<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/blue_jeans.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Diet Mountain Dew<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/diet_mountain_dew.mp3";
                }
            } else if (ansarr[1] == 'c') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Million Dollar Man<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/million_dollar_man.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Music To Watch Boys To<br>Honeymoon";
                    play.src = "./audios/Honeymoon/MTWBT.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Gods & Monsters<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/gods_&_monsters.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "If You Lie Down With Me<br>Blue Banisters";
                    play.src = "./audios/Blue_Banisters/IYLDWM.mp3";
                }
            } else if (ansarr[1] == 'd') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Peppers (feat. Tommy Genesis)<br>Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/peppers.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Summer Bummer (feat. A$AP Rocky & Playboi Carti)<br>Lust For Life";
                    play.src = "./audios/LFL/summer_bummer.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Salvatore<br>Honeymoon";
                    play.src = "./audios/Honeymoon/salvatore.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "A&W<br>Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/a&w.mp3";
                }
            }
        } else if (ansarr[0] == 'c') {
            if (ansarr[1] == 'a') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Religion<br>Honeymoon";
                    play.src = "./audios/Honeymoon/religion.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Love<br>Lust For Life";
                    play.src = "./audios/LFL/love.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Yosemite<br>Chemtrails Over The Country Club";
                    play.src = "./audios/COTCC/yosemite.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Wild At Heart<br>Chemtrails Over The Country Club";
                    play.src = "./audios/COTCC/wild_at_heart.mp3";
                }
            } else if (ansarr[1] == 'b') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Candy Necklace (feat. Jon Batiste)<br>Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/candy_necklace.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Blue Banisters<br>Blue Banisters";
                    play.src = "./audios/Blue_Banisters/blue_banisters.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Guns And Roses<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/guns_and_roses.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Radio<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/radio.mp3";
                }
            } else if (ansarr[1] == 'c') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "West Coast<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/west_coast.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Sad Girl<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/sad_girl.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Heroin<br>Lust For Life";
                    play.src = "./audios/LFL/heroin.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Fishtail<br>Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/fishtail.mp3";
                }
            } else if (ansarr[1] == 'd') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Venice Bitch<br>Norman Fucking Rockwell";
                    play.src = "./audios/NFR/venice_bitch.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Terrence Loves You<br>Honeymoon";
                    play.src = "./audios/Honeymoon/terrence_loves_you.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Ride<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/ride.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Lust For Life (feat. The Weekend)<br>Lust For Life";
                    play.src = "./audios/LFL/lust_for_life.mp3";
                }
            }
        } else if (ansarr[0] == 'd') {
            if (ansarr[1] == 'a') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Happiness is a butterfly<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/happiness_is_a_butterfly.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Love song<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/love_song.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Beatiful People, Beautiful Problems (feat. Stevie Nicks)<br>Lust For Life";
                    play.src = "./audios/LFL/BPBP.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "White Dress<br>Chemtrails Over The Country Club";
                    play.src = "./audios/COTCC/white_dress.mp3";
                }
            } else if (ansarr[1] == 'b') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Change<br>Lust For Life";
                    play.src = "./audios/LFL/change.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Fingertips<br>Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/fingertips.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Nectar Of The Gods<br>Blue Banisters";
                    play.src = "./audios/Blue_Banisters/nectar_of_the_gods.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "American<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/american.mp3";
                }
            } else if (ansarr[1] == 'c') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "Summertime Sadness<br>Born to Die: The Paradise Edition";
                    play.src = "./audios/BTDTPE/summertime_sadness.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Did you know that there's a tunnel under Ocean Blvd";
                    play.src = "./audios/DYKTTATUOB/DYKTTATUOB.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Cinnamon Girl<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/cinnamon_girl.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Breaking Up Slowly (feat. Nikki Lane)<br>Chemtrails Over The Country Club";
                    play.src = "./audios/COTCC/breaking_up_slowly.mp3";
                }
            } else if (ansarr[1] == 'd') {
                if (ansarr[2] == 'a') {
                    ans.innerHTML = "How to disappear<br>Norman Fucking Rockwell!";
                    play.src = "./audios/NFR/how_to_disappear.mp3";
                } else if (ansarr[2] == 'b') {
                    ans.innerHTML = "Honeymoon<br>Honeymoon";
                    play.src = "./audios/Honeymoon/honeymoon.mp3";
                } else if (ansarr[2] == 'c') {
                    ans.innerHTML = "Old Money<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/old_money.mp3";
                } else if (ansarr[2] == 'd') {
                    ans.innerHTML = "Cruel World<br>Ultraviolence";
                    play.src = "./audios/Ultraviolence/cruel_world.mp3";
                }
            }
        }
        play.play();
    }
}