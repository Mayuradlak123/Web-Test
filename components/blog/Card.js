import styles from "../../styles/blogs.module.css"

const Card = ({ blog }) => {

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (

            <div className={styles.tagcatdisplay} key={i}>
                <a href={`/categories/${c.slug}`} className={styles.category}>
                    {c.name}
                </a>
            </div>
        ))

        const formattedDate = blog.formattedDate;

    return (

        <>
            <section className={styles.Fimage}>
                <img src={blog.photo} alt={blog.title} className={styles.images} />
            </section>

            <header><a className={styles.headcolor} href={`/blogs/${blog.slug}`}><h2 className={styles.blogtitle}>{blog.title}</h2></a></header>

                <section className={styles.dateauthor}>
                {formattedDate} &nbsp; by &nbsp;
                {blog.postedBy && blog.postedBy.name && blog.postedBy.username ? (
                    <a href={`/about`} className={styles.author}>
                        {blog.postedBy.name}
                    </a>
                ) : (
                    <span>User</span>
                )}
            </section>

            <div className={styles.givepadding}>
                {showBlogCategories(blog)}
                

                <section>
                    <div className={styles.para}>{(blog.excerpt)}</div>
                   
                </section>
            </div>

    
        </>

    );
};

export default Card;