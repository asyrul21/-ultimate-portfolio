import react from 'react'
import cx from 'classnames'

import projecttabsStyles from './styles/projecttabs.module.scss'

class ProjectTabs extends react.Component {

    render() {
        // console.log(this.props.data[0].key)
        return (
            <div className={projecttabsStyles.projectsContainer}>
                {this.props.data.map((data) => {
                    return (
                        <div key={data.key} className={cx(projecttabsStyles.projectTabContainer, this.props.active === data.key ? projecttabsStyles.active : null)}>
                            <div className={projecttabsStyles.tabBox}
                                key={data.key}
                                onClick={() => this.props.onChange(data.key)}
                            >
                                <span>{data.name}</span>
                            </div>
                        </div>
                    )
                })
                }
            </ div >
        )
    }
}

export default ProjectTabs;