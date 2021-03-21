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
               f = four half steps
               F = five half steps
               s = six half steps
            */
            if(steps[i] == "h"){
                cur = cur.next;
            }
            else if(steps[i] == "w"){
                cur = cur.next.next;
            }
            else if(steps[i] == "o"){
                cur = cur.next.next.next;
            }
            else if(steps[i] == "f"){
                cur = cur.next.next.next.next;
            }
            else if(steps[i] == "F"){
                cur = cur.next.next.next.next.next;
            }
            else if(steps[i] == "s"){
                cur = cur.next.next.next.next.next.next;
            }
        }
        pat.push(cur.note);
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
class Scale {
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
        console.log(temp_array[0] + " " + this.name);
        for(let note of temp_array){
            console.log(note);
        }
    }
}
//my scales
const major_scale = new Scale("major", "wwhwww");
const minor_scale = new Scale("minor", "whwwhw");
const harmonic_minor_scale = new Scale("harmonic minor", "whwwho");
const melodic_minor_scale = new Scale("melodic minor", "whwwww");
const major_pentatonic_scale = new Scale("major pentatonic", "wwow");
const minor_pentatonic_scale = new Scale("minor pentatonic", "owwo");
const dominant_pentatonic_scale = new Scale("dominant pentatonic", "wwoo");
const dorian_pentatonic_scale = new Scale("dorian pentatonic", "owww");
const dorian_mode_scale = new Scale("dorian mode", "whwwwh");
const mixolydian_mode_scale = new Scale("mixolydian mode", "wwhwwh");
const lydian_mode_scale = new Scale("lydian mode", "wwwhww");
const phrygian_mode_scale = new Scale("phygian mode", "hwwwhw");
const locrian_mode_scale = new Scale("locrian mode", "hwwhww");
const blues_scale = new Scale("blues", "owhho");
const whole_tone_scale = new Scale("whole tone", "wwwww");
const diminished_scale = new Scale("diminshed", "whwhwhw");
const altered_dominant_scale = new Scale("altered dominant", "hwhwww");
const bebop_scale = new Scale("bebop", "wwhwwhh");

//my chords
const major_chord = new Scale("major", "fo");
const sus2_chord = new Scale("sus2", "wF");
const add9_chord = new Scale("add9", "wwo");
const sus4_chord = new Scale("sus4", "Fw");
const major6_chord = new Scale ("major 6", "fow");
const major69_chord = new Scale("major 6/9", "wwo");
const major7_chord = new Scale("major 7", "fof");
const seventh_chord = new Scale("seventh", "foo");
const seventh_sus4_chord = new Scale("seventh sus4", "Fwo");
const seventh_sharp5_chord = new Scale("seventh #5", "ffw");
const seventh_flat5_chord = new Scale("seventh flat 5", "fwf");
const ninth_chord = new Scale("ninth", "wwoo");
const eleventh_chord = new Scale("eleventh", "wowo");
const thirteenth_chord = new Scale("thirteenth", "wwFh");
const thirteenth_flat9_chord = new Scale("thirteenth flat 9", "hoFh");
const augmented_chord = new Scale("augmented", "ff");
const minor_chord = new Scale("minor", "of");
const seventh_flat9_chord = new Scale("seventh flat 9", "hooo");
const seventh_sharp9_chord = new Scale("seventh sharp 9", "ohs");
const minor_sixth_chord = new Scale("minor sixth", "ofw");
const minor_seventh_chord = new Scale("minor seventh", "ofo");
const minor_seventh_flat5_chord = new Scale("minor seventh flat 5", "oof");
const minor_ninth_chord = new Scale("minor ninth", "whfo");
const minor_major_seventh_chord = new Scale("minor major seventh","off");
const minor_eleventh_chord = new Scale("minor eleventh", "owwo");
const minor_thirteenth_chord = new Scale("minor thirteenth", "ofwh");
const diminished_chord = new Scale("diminished", "oo");
const diminished_seventh_chord = new Scale("diminished seventh", "ooo");


class Scales{
    constructor(name){
        this.scales = [];
        this.name = name;
    }
    push(scale){
        this.scales.push(scale);
    }
    get(note, scale){
        for(let i = 0; i < this.scales.length; i++){
            if(this.scales[i].name == scale){
                return this.scales[i].get(note);
            }
        }
        console.log("ERROR: Invalid note or " + this.name);
    }
    get_show(note, major){
        for(let i = 0; i < this.scales.length; i++){
            if(this.scales[i].name == major){
                this.scales[i].get_show(note);
                break;
            }
        }
    }
}

var SCALES = new Scales("scale");
var CHORDS = new Scales("chord");

SCALES.push(major_scale);
SCALES.push(minor_scale);
SCALES.push(harmonic_minor_scale);
SCALES.push(melodic_minor_scale);
SCALES.push(major_pentatonic_scale);
SCALES.push(minor_pentatonic_scale);
SCALES.push(dominant_pentatonic_scale);
SCALES.push(dorian_mode_scale);
SCALES.push(mixolydian_mode_scale);
SCALES.push(lydian_mode_scale);
SCALES.push(phrygian_mode_scale);
SCALES.push(locrian_mode_scale);
SCALES.push(blues_scale);
SCALES.push(whole_tone_scale);
SCALES.push(diminished_scale);
SCALES.push(altered_dominant_scale);
SCALES.push(bebop_scale);

CHORDS.push(major_chord);
CHORDS.push(sus2_chord);
CHORDS.push(add9_chord);
CHORDS.push(sus4_chord);
CHORDS.push(major6_chord);
CHORDS.push(major69_chord);
CHORDS.push(major7_chord);
CHORDS.push(seventh_chord);
CHORDS.push(seventh_sharp5_chord);
CHORDS.push(seventh_flat5_chord);
CHORDS.push(ninth_chord);
CHORDS.push(eleventh_chord);
CHORDS.push(thirteenth_chord);
CHORDS.push(thirteenth_flat9_chord);
CHORDS.push(augmented_chord);
CHORDS.push(minor_chord);
CHORDS.push(seventh_flat9_chord);
CHORDS.push(seventh_sharp9_chord);
CHORDS.push(minor_sixth_chord);
CHORDS.push(minor_seventh_chord);
CHORDS.push(minor_seventh_flat5_chord);
CHORDS.push(minor_ninth_chord);
CHORDS.push(minor_major_seventh_chord);
CHORDS.push(minor_eleventh_chord);
CHORDS.push(minor_thirteenth_chord);
CHORDS.push(diminished_chord);
CHORDS.push(diminished_seventh_chord);

console.log(is_inside(CHORDS.get("A", "major"), SCALES.get("C", "major")));

//returns true if array1 is in array2
function is_inside(array1, array2){
    let counter = 0;
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] == array2[j])
                counter++;
                continue;
        }
    }
    if(counter == array1.length)
        return true;
    else 
        return false;
}

function chords_in_scale(note,scale){
    let s = SCALES.get(note,scale); // s if for scale array returned
    let chords = [];
    for(let i = 0; i < CHORDS.scales.length;i++){
        for(let j = 0; j < 12; j++){
            let temp_chord = CHORDS.scales[i].scales[j];
            if(is_inside(temp_chord, s)){
                let chord_string = temp_chord[0] + " " + CHORDS.scales[i].name;
                chords.push(chord_string);
            }
        }
    }
    return chords;
}
function scales_for_chord(note,chord){
    let c = CHORDS.get(note,chord); //  if for chord array returned
    let scales = [];
    for(let i = 0; i < SCALES.scales.length;i++){
        for(let j = 0; j < 12; j++){
            let temp_scale = SCALES.scales[i].scales[j];
            if(is_inside(c, temp_scale)){
                let scale_string = temp_scale[0] + " " + SCALES.scales[i].name;
                scales.push(scale_string);
            }
        }
    }
    return scales;
}

let temp = scales_for_chord("C", "major");
console.log(temp);
