import react from 'react'

import tabsStyles from './styles/tabs.module.scss'

class Tabs extends react.Component {
    render() {
        return (
            <div className={tabsStyles.tabContainer}>
                {this.props.children.map((child, idx) => {
                    return (
                        // passing child state to parent
                        <a key={idx} onClick={() => this.props.onChange(child.key)}
                            className={this.props.active === child.key ? tabsStyles.active : null}>
                            {child}
                        </a>
                    )
                })
                }
            </ div >
        )
    }
}

export default Tabs;


// handleClick(item) {
//     let newState = {}
//     Object.keys(this.state).map((key, value) => {
//         if (key === `${item}Active`) {
//             newState[`${key}`] = true;
//         }
//         else {
//             newState[`${key}`] = false;
//         }
//     })
//     this.setState(newState);
// }