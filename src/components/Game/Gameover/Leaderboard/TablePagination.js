const TablePagination = (props) => {

    const buttonStyle = {
        fontSize: "8px",
        padding: "3px",
        margin: "0 2px"
    }

    return (
        <div className="TablePagination">
            
            <div className="pagination" >
                <button
                    onClick={props.previousPage}
                    disabled={!props.canPreviousPage}
                    style={buttonStyle}
                > {"<<"}
                </button>
                    <div className="table-pagesIndexing">{props.pageIndex + 1} / {props.pageOptions.length}</div>
                <button
                    onClick={
                        props.nextPage
                    }
                    disabled={!props.canNextPage}
                    style={buttonStyle}
                >{">>"}
                </button>
            </div>
        </div>
    )
}

export default TablePagination