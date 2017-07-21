import dispatcher from '../dispatcher';

export function filterBySearch(searchParameters) {
    console.log(searchParameters);
    dispatcher.dispatch({
        type: "FILTER_SEARCH",
        searchParameters,
    });
}

export function filterByStock(stockStatus) {
    dispatcher.dispatch({
        type: "FILTER_STOCK",
        stockStatus,
    });
}
