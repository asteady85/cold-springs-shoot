import './horizontal-block.scss'

const HorizontalBlock = ({ items, classes }) => (
  <div className={`horizontal-block ${classes}`}>
    {
      items.map((item, key) => {
        const content = item.content || item
        const blockClasses = item.blockClass || ''
        return (
          <div key={key} className={`horizontal-block-card ${blockClasses}`}>
            {content}
          </div>
        )
      })
    }
  </div>
)

export default HorizontalBlock
