import { Pipe, PipeTransform } from '@angular/core';
import { TrendingResult } from '../tmdb-data/TrendingSearch';

@Pipe({
    name: 'trendingFilter'
})
export class FilterTrendingPipe implements PipeTransform {
    transform(movies: TrendingResult[], title: string) {
        if (movies && movies.length) {
            return movies.filter(movie => {
                if (movie.original_title) {
                    if (title && (movie.original_title.toLowerCase().indexOf(title.toLowerCase()) === -1))
                        return false;
                }
                else {
                    if (title && (movie.original_name.toLowerCase().indexOf(title.toLowerCase()) === -1))
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