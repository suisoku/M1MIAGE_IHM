import { Pipe, PipeTransform } from '@angular/core';
import { MovieResult, SearchContent } from '../tmdb-data/searchMovie';

@Pipe({
    name: 'searchFilter'
})
export class FilterSearchPipe implements PipeTransform {
    transform(movies: MovieResult[], searchContent: SearchContent, selectedGenre: number, yearFilter: number[], title: string, producer?: string, actors?: string[]) {
        if (movies && movies.length) {
            return searchContent.searchedMovies.results.filter(movie => {
                if (title && movie.original_title.toLowerCase().indexOf(title.toLowerCase()) === -1) {
                    return false;
                }

                if (selectedGenre && movie.genre_ids.indexOf(selectedGenre) === -1) {
                    return false;
                }

                if (yearFilter &&
                    (parseInt(movie['release_date'], 0) < yearFilter[0] ||
                        parseInt(movie['release_date'], 0) > yearFilter[1])) {
                    return false;
                }
                return true;
            })
        }
        else {
            return movies;
        }
    }
}