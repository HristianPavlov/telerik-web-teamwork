var searchBarLayoutProvider = function() {
    return {
        html : `<div class="row">
                    <div class="col-md-8 offset-2">
                        <div class="input-group">
                            <input id="search-input" type="text" class="form-control" placeholder="Search for...">
                            <span class="input-group-btn">
                                <button id="go-btn" class="btn btn-secondary" type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
                <br>
                <div id="results" class="container"></div>`
    }
}