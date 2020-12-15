export interface IMoviePreview {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMoviePreviewRequest {}

export interface IMoviePreviewResponse {
    Response: boolean;
    Search: IMoviePreview[];
    totalResults?: number;
    Error?: string;
}