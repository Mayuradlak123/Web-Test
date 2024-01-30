import styles from "../../styles/blogposts.module.css"

const SmallCard = ({ blog }) => {
    const formattedDate = blog.formattedDate;
    return (
        < >
         <a href={`/blogs/${blog.slug}`} className={styles.relatedtitle}>
            <section className={styles.resizeparent}>
                <img className={styles.resizeimgrelated}  src={blog.photo} alt={blog.title} />   
            </section>

            <section className={styles.givetitlemar}> 
                 {blog.title} 
            </section>
            </a>

            <section className={styles.dateauth0}>
                {formattedDate} &nbsp; by &nbsp;
                {blog.postedBy && blog.postedBy.name && blog.postedBy.username ? (
                    <a href={`/about`} className={styles.author}>
                        {blog.postedBy.name}
                    </a>
                ) : (
                    <span></span>
                )}
            </section>

            <br/>
            
        </>
        
    );
};

export default SmallCard;