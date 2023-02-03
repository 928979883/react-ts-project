// 样式模块化引入 = scope 防止污染
import styles from "./comp1.module.scss"

function Comp() {
  return(
    <div className={styles.box}>
      <h1>Comp1内容</h1>
    </div>
  )
}

export default Comp