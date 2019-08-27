export const API_KEY = "a25eedec53mshfd2ce9215322c5ap109c16jsn7e6377933d52";
export const API_HOST = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com";
export const CONTENT_TYPE = "application/x-www-form-urlencoded";

export const getHeaders = () => {
    return {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
        "content-type": CONTENT_TYPE
    };
}
