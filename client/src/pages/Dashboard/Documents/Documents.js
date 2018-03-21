import React from 'react';

const Documents = () => (
    <div className="main-container">
    <section className="flush-with-above">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-md-auto mb-5">
                    <form className="mb-4">
                        <input className="form-control" placeholder="Search" type="text" name="search-table" />
                    </form>
                    <nav className="nav flex-md-column">
                        <a href="/" className="nav-link active">All</a>
                        <a href="/" className="nav-link">Files</a>
                        <a href="/" className="nav-link">Folders</a>
                        <a href="/" className="nav-link">Images</a>
                    </nav>
                    <hr className="short" />
                    <button className="btn btn-primary">Upload new</button>
                </div>
                {/*
                <!--end of col-->*/}
                <div className="col-12 col-md-10 col-lg-9">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <span className="text-muted text-small">Results 1 - 12 of 25</span>
                        </div>
                        <form className="d-flex align-items-center">
                            <span className="mr-2 text-muted text-small text-nowrap">Sort by:</span>
                            <select className="custom-select">
                                <option value="alpha">Alphabetical</option>
                                <option value="old-new" selected>Newest</option>
                                <option value="new-old">Oldest</option>
                                <option value="recent">Recently Modified</option>
                            </select>
                        </form>
                    </div>
                    <table className="table align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Created</th>
                                <th scope="col">Author</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-images text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Photos</span>
                                    </a>
                                </th>
                                <td>28/11/2017</td>
                                <td>You</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-text-document-inverted text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Cover letter draft</span>
                                    </a>
                                </th>
                                <td>28/11/2017</td>
                                <td>You</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-images text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Photos</span>
                                    </a>
                                </th>
                                <td>21/11/2017</td>
                                <td>You, Kelly</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-images text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Photos</span>
                                    </a>
                                </th>
                                <td>--</td>
                                <td>Camreon Smith</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-images text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Photos</span>
                                    </a>
                                </th>
                                <td>14/11/2017</td>
                                <td>Samuel Barber</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Recipes</span>
                                    </a>
                                </th>
                                <td>--</td>
                                <td>You</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-music text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Audio files</span>
                                    </a>
                                </th>
                                <td>--</td>
                                <td>You</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-images text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Photos</span>
                                    </a>
                                </th>
                                <td>25/10/2017</td>
                                <td>Anne</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-images text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Photos</span>
                                    </a>
                                </th>
                                <td>21/10/2017</td>
                                <td>Anne</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-small">
                                <th scope="row">
                                    <a href="/" className="d-flex align-items-center">
                                        <div className="thumbnail thumbnail-sm">
                                            <i className="icon-folder-video text-primary h4"></i>
                                        </div>
                                        <span className="text-body">Videos</span>
                                    </a>
                                </th>
                                <td>--</td>
                                <td>Anand</td>
                                <td>
                                    <div className="dropdown d-inline-block">
                                        <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-dots-three-horizontal"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/">Download</a>
                                            <a className="dropdown-item" href="/">Share</a>
                                            <a className="dropdown-item" href="/">Comment</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="/">1</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="/">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="/">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/*
                <!--end of col-->*/}
            </div>
            {/*
            <!--end of row-->*/}
        </div>
        {/*
        <!--end of container-->*/}
    </section>
    {/*
    <!--end of section-->*/}
</div>
)

export default Documents;