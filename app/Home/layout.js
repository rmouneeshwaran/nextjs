import Navbar from "@/components/Navbar";
import styles from "@/styles/Homelayout.module.css"


export default function HomeLayout({ children }) {
    return (
    <div>
        <div className={styles.navbar}>
        <Navbar/>
        </div>
        <div  className={styles.children}>
        {children}
        </div>
    </div>
   
    )
  }