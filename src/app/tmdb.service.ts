<<<<<<< HEAD
import {Injectable} from '@angular/core';
import {MovieGenre, MovieQuery, MovieResponse, ProductionCountry} from './tmdb-data/Movie';
=======
import { Injectable } from '@angular/core';
import {MovieQuery, MovieResponse} from './tmdb-data/Movie';
<<<<<<< HEAD
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
=======
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
import {HttpClient, HttpResponse} from '@angular/common/http';
import {PersonQuery, PersonResponse} from './tmdb-data/Person';
import {SearchMovieQuery, SearchMovieResponse} from './tmdb-data/searchMovie';
import {SearchPeopleQuery, SearchPeopleResponse} from './tmdb-data/SearchPeople';
import {TVQuery, TVResponse} from './tmdb-data/TV';
import {SearchTVQuery, SearchTVResponse} from './tmdb-data/SearchTV';

const tmdbApi = 'https://api.themoviedb.org/3';
type HTTP_METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT';

<<<<<<< HEAD
<<<<<<< HEAD
function AlxToObjectString(data: Object): { [key: string]: string } {
=======
function AlxToObjectString(data: Object): {[key: string]: string} {
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
=======
function AlxToObjectString(data: Object): {[key: string]: string} {
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
  const res = {};
  for (const k in data) {
    const v = data[k];
    res[k] = typeof v === 'string' ? v : JSON.stringify(v);
  }
  return res;
}

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private api_key: string;

  private async get<T>(url: string, data: Object): Promise<HttpResponse<T>> {
    return this._http.get<T>(url, {
      observe: 'response',
      params: {...AlxToObjectString(data), api_key: this.api_key}
    }).toPromise();
  }

  constructor(private _http: HttpClient) {
  }

  init(key: string): this {
    this.api_key = key;
    return this;
  }

  // _______________________________________________________________________________________________________________________________________
  // Movies ________________________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
  async getMovie(id: number, options?: MovieQuery): Promise<MovieResponse> {
    const url = `${tmdbApi}/movie/${id}`;
    const res = await this.get<MovieResponse>(url, options);
    return res.body;
  }

  async searchMovie(query: SearchMovieQuery): Promise<SearchMovieResponse> {
    const url = `${tmdbApi}/search/movie`;
    const res = await this.get<SearchMovieResponse>(url, query);
    return res.body;
  }

  // _______________________________________________________________________________________________________________________________________
  // Person / People _______________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
  async getPerson(id: number, options?: PersonQuery): Promise<PersonResponse> {
    const url = `${tmdbApi}/person/${id}`;
    const res = await this.get<PersonResponse>(url, options);
    return res.body;
  }

  async searchPerson(query: SearchPeopleQuery): Promise<SearchPeopleResponse> {
    const url = `${tmdbApi}/search/person`;
    const res = await this.get<SearchPeopleResponse>(url, query);
    return res.body;
  }

  async getPeoples(query: SearchPeopleQuery): Promise<SearchPeopleResponse[]> {
    const url = `${tmdbApi}/search/person`;
    const res = await this.get<SearchPeopleResponse[]>(url, query);
    return res.body;
  }


  // _______________________________________________________________________________________________________________________________________
  // Genre _______________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
  async getGenre(): Promise<MovieGenre[]> {
    const url = `${tmdbApi}/genre/movie/list`;
    const res = await this.get<MovieGenre[]>(url, []);
    return res.body;
  }

  // _______________________________________________________________________________________________________________________________________
  // Countries _______________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
  async getCountries(): Promise<ProductionCountry[]> {
    const url = `${tmdbApi}/configuration/countries`;
    const res = await this.get<ProductionCountry[]>(url, []);
    return res.body;
  }

  // _______________________________________________________________________________________________________________________________________
  // TV ____________________________________________________________________________________________________________________________________
  // _______________________________________________________________________________________________________________________________________
  async getTV(id: number, options?: TVQuery): Promise<TVResponse> {
    const url = `${tmdbApi}/tv/${id}`;
    const res = await this.get<TVResponse>(url, options);
    return res.body;
  }

  async searchTV(query: SearchTVQuery): Promise<SearchTVResponse> {
    const url = `${tmdbApi}/search/tv`;
    const res = await this.get<SearchTVResponse>(url, query);
    return res.body;
  }

}
