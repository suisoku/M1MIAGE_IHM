import {Pipe, PipeTransform } from '@angular/core';
import { SearchPeopleResponse } from '../tmdb-data/SearchPeople';

@Pipe({
    name: 'actorsFilter'
})
export class FilterActorPipe implements PipeTransform {
    transform(actors: SearchPeopleResponse['results'],  name: string){
        if (actors && actors.length){
            return actors.filter(actor =>{
                if (name && actor.name.toLowerCase().indexOf(name.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return actors;
        }
    }
}