const Notes_Array = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
class Note{
    constructor(note){
        this.note = note;
        this.next = null;
    }
}
class Pattern{
    constructor(root, pattern, name){
        this.root = root;
        this.pattern = pattern;
        this.name = name;
    }
}
class Notes{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        for(let i = Notes_Array.length - 1; i >= 0;i--){
            this.add_front(Notes_Array[i]);
        }
    }
    add_front(n){
        let temp = new Note(n);
        if(this.head == null){
            this.head = temp;
            this.tail = temp;
        }
        else{
            temp.next = this.head;
            this.head = temp;
        }
        this.tail.next = this.head;
        this.size++;
    }
    pattern(root,steps){
        let pat = []; 
        let cur = this.head;
        while(cur.note != root){
            cur = cur.next;
        }
        for(let i = 0; i < steps.length; i++){
            pat.push(cur.note);
            /* w = whole step
               h = half step
               o = one and a half steps

            */
            if(steps[i] == "w"){
                cur = cur.next.next;
            }
            else if(steps[i] == "h"){
                cur = cur.next;
            }
            else if(steps[i] == "o"){
                cur = cur.next.next.next;
            }
        }
        return pat;
    }
    show(){
        let cur = this.head;
        for(let i = 0; i < this.size; i++){
            console.log(cur.note);
            cur = cur.next;
        }
    }
}
const NOTES = new Notes();
class Scale{
    constructor(name, steps){
        this.scales = [];
        this.name = name;
        this.steps = steps;
        for(let note of Notes_Array){
            let pattern = NOTES.pattern(note,steps);
            this.scales.push(pattern);
        }
    }
    show(){
        for(let i = 0; i < scales.length; i++){
            console.log(scales[i][0] + " " + this.name);
            for(let j = 0; j < scales[i].length; j++){
                console.log(scales[i][j]);
            }
        }
    }
    get(note){
        let i = 0;
        for(; i < this.scales.length; i++){
            if(this.scales[i][0] == note){
                return this.scales[i];
            }
        }
    }
    get_show(note){
        let temp_array = this.get(note);
        console.log(temp_array[0] + " " + this.name + " scale");
        for(let note of temp_array){
            console.log(note);
        }
    }
}

const major_scale = new Scale("major", "wwhwwwh");
const minor_scale = new Scale("minor", "whwwhww");
const harmonic_minor_scale = new Scale("harmonic minor", "whwwhoh");
const melodic_minor_scale = new Scale("melodic minor", "whwwwwh");
const major_pentatonic_scale = new Scale("major pentatonic", "wwowo");
const minor_pentatonic_scale = new Scale("minor pentatonic", "owwow");
const dominant_pentatonic_scale = new Scale("dominant pentatonic", "wwoow");
const dorian_pentatonic_scale = new Scale("dorian pentatonic", "owwwo");
const dorian_mode_scale = new Scale("dorian mode", "whwwwhw");
const mixolydian_mode_scale = new Scale("mixolydian mode", "wwhwwhw");
const lydian_mode_scale = new Scale("lydian mode", "wwwhwwh");
const phrygian_mode_scale = new Scale("phygian mode", "hwwwhww");
const locrian_mode_scale = new Scale("locrian mode", "hwwhwww");
const blues_scale = new Scale("blues", "owhhow");
const whole_tone_scale = new Scale("whole tone", "wwwwww");
const diminished_scale = new Scale("diminshed", "whwhwhwh");
const altered_dominant_scale = new Scale("altered dominant", "hwhwwww");
const bebop_scale = new Scale("bebop", "wwhwwhhh");

