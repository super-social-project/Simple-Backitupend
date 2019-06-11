import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;

    // General Styles
    button, input, select {
        font-size: 1.8rem;
        height: 100%;
        padding: 0.5rem 1rem;
    }
    button, select {
        background-color: #222;
        color: #ccc;
        cursor: pointer;
        &:hover {color: #fff}
    }
    input {
        background-color: #d9d9df;
        width: 100%;
        &:hover {background-color: #eef}
    }
    .menu {
        cursor: pointer;
        .menu-name {font-size: 1.6rem}
        .menu-options {
            background-color: #fff;
            box-shadow: 0 0 2px 0px rgba(0,0,0,.42);
            display: flex;
            flex-direction: column;
            padding: 1rem 0;
            position: absolute;
            .option {
                align-items: center;
                cursor: pointer;
                color: #000;
                display: flex;
                font-size: 1.4rem;
                height: 25px;
                justify-content: space-between;
                padding: 1.75rem 1.25rem;
                &:hover {background-color: #ccc}
                .option-hotkey {
                    color: #666;
                    font-size: 1.2rem;
                    font-weight: 700;
                    padding-left: 1rem;
                }
            }
        }
    }

    // Specific Styles
    .header {
        padding: 0 1rem;
        .path {font-size: 1.8rem}
    }
    .menu-bar {
        align-items: center;
        background-color: #222;
        color: #ccc;
        display: flex;
        height: 33px;
        .menu {
            padding: 0 1rem;
            &:not(:last-of-type) {border-right: 1px solid #888}
        }
    }
    .table-search {
        align-items: center;
        background-color: #ccc;
        display: flex;
        input {background-color: #ccc}
        .menu-name {
            border-right: 1px solid #888;
            font-size: 1.6rem;
            padding: 0 1rem;
        }
    }
    .table {
        display: flex;
        grid-area: table;
        table {
            font-size: 1.6rem;
            width: 100%;
            .table-header {
                background-color: #222;
                color: #ccc;
                cursor: pointer;
                th {
                    border-color: #666;
                    border-style: solid;
                    border-width: 0 1px;
                    &:first-of-type {border-left: 0}
                    &:last-of-type {border-right: 0}
                }
            }
            .entries {
                .entry {
                    &:hover {
                        background-color: #ccc;
                        td {border-color: #888}
                    }
                    td {
                        border: 1px solid #ccc;
                        padding: 1rem;
                        &:first-of-type {border-left: 0}
                        &:last-of-type {border-right: 0}
                        .cell {
                            align-items: center;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    &:first-of-type {td {border-top: 0}}
                    &:last-of-type {td {border-bottom: 0}
                    }
                }
            }
        }
    }
`