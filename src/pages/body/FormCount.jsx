export default function FormCount() {

    return (

        <>
            <section className="cover">
                <div id="cover-caption">
                    <div id="container" class="container">
                        <div class="row">
                            <div class="col-sm-10 offset-sm-1 text-center">
                                <h1 class="display-3">Welcome to Bootstrap 4</h1>
                                <div class="info-form">
                                    <form action="" class="form-inline justify-content-center">
                                        <div class="form-group">
                                            <label class="sr-only">Name</label>
                                            <input type="text" class="form-control" placeholder="Jane Doe" />
                                        </div>
                                        <div class="form-group">
                                            <label class="sr-only">Email</label>
                                            <input type="text" class="form-control" placeholder="jane.doe@example.com" />
                                        </div>
                                        <button type="submit" class="btn btn-success ">okay, go!</button>
                                    </form>
                                </div>
                                <br />

                                <a href="#nav-main" class="btn btn-secondary-outline btn-sm" role="button">↓</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )


}