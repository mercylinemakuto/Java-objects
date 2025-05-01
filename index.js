
1.// Create a User object with properties like name, stepsWalked (an array of daily steps), and a method totalSteps() that calculates and returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.

    
        
    
        const personSteps = {
            name : 'Jane',
            stepsWalked: [2000,5500,4800,3700,2900],
            totalSteps: function(){
                return this.stepsWalked.reduce((acc, curr) => acc + curr, 0);
            },
            averageSteps: function(){
                return this.totalSteps()/ this.stepsWalked.length;

            }
        }
    console.log(personSteps.totalSteps());
    console.log(personSteps.averageSteps());


 2.// Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method displayRecipe() that logs the name and all ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.
        function recipeIngredients(name, ingredients, cookTime){
            this.name = name,
            this.ingredients = ingredients,
            this.cookTime = cookTime;
            this.displayRecipe = function(){
                return `I am ${name} and am baking using  ${ingredients}`
            }
            this.isQuickMeal = function(){
                return cookTime <= 30 
            }

        };
        const recipe = new recipeIngredients('John','wheat','40')
        console.log(recipe.displayRecipe());
        console.log(recipe.isQuickMeal());

// 3. Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.
    const carObject = {
        model : 'Forester',
        mileage : 10,
        serviceHistory:['26/7/2011', '15/1/2020','9/12/2022'],
        addService: function(date){
            this.serviceHistory.push(date);
            return this.serviceHistory
        },
        lastServiceDate: function(){
            return this.serviceHistory[this.serviceHistory.length -1]
        }
    };
   
    console.log(carObject.addService('15/2/2024'));
    console.log(carObject.lastServiceDate());

// 4. Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) to add a song, removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.
    const playlist = {
        songs:['Chikwere','Isabella','Extra-Pressure','Suzanna'],
        addSongs: function (song){
             this.songs.unshift('my love');
             return this.songs
            },
        removeSong: function(){
            return this.songs.shift()
        },
        listSongs: function(){
            return playlist.songs
        }

    };
  
    console.log(playlist.addSongs());

    console.log(playlist.removeSong());
    
    console.log(playlist.listSongs());

    // 5.Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".
    // 
    function Courses(title, lessons, completedLessons){
        this.title = title,
        this.lessons = lessons,
        this.completedLessons = completedLessons;
        this.markComplete = function(lesson){
            this.completedLessons.unshift(lesson);
            // this.completedLessons.unshift(lesson);
            return this.completedLessons;
        }
        this.getProgress = function(){
            return (`${this.completedLessons.length} out of ${lessons.length} completed`)
        }
    };
    const courses = new Courses('Software engineering',['JavaScript','Python','Cybersecurity','Design','Machine Learning']);
    console.log(courses.markComplete('DAS','Communication'));
    console.log(courses.getProgress());



   