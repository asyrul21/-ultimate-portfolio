import react from 'react'
import cx from 'classnames'

import innertabsStyles from './styles/innertabs.module.scss'

class InnerTabs extends react.Component {

    render() {
        // console.log(this.props.data[0].key)
        return (
            <div className={innertabsStyles.projectsContainer}>
                {this.props.data.map((data) => {
                    return (
                        <div key={data.key} className={cx(innertabsStyles.projectTabContainer, this.props.active === data.key ? innertabsStyles.active : null)}>
                            <div className={innertabsStyles.tabBox}
                                key={data.key}
                                onClick={() => this.props.onChange(data.key)}
                            >
                                <span>{data.title}</span>
                            </div>
                        </div>
                    )
                })
                }
            </ div >
        )
    }
}

export default InnerTabs;