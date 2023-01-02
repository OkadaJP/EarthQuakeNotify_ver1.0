/*
    地震情報のModel
*/

export class earthquakeModel{
    constructor(id,level,place,time){
        this.id = id;
        this.level = level;
        this.place = place;
        this.time = time;
    }

    get getId(){
        return this.id;
    }
    set setId(id){
        this.id = id;
    }

    get getLevel(){
        return this.level;
    }
    set setLevel(level){
        this.level = level;
    }

    get getPlace(){
        return this.place;
    }
    set setPlace(place){
        this.place = place;
    }

    get getTime(){
        return this.time;
    }
    set setTime(time){
        this.time = time;
    }
}