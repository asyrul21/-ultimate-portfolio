import react from 'react'

import ContentListStyles from './ContentsList.module.scss'

class ContentsList extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewMode: false,
            editMode: false
        };
    }

    render() {
        console.log(this.props.data);
        return (
            <react.Fragment >
                <div className={ContentListStyles.addButton}>Add New Content</div>
                {
                    <div className={ContentListStyles.container}>
                        {
                            this.props.data.map((item, idx) => {
                                return (
                                    <div key={idx} className={ContentListStyles.list}>
                                        <p className={ContentListStyles.text}>{item.key}</p>
                                        <p className={ContentListStyles.text}>{item.title}</p>
                                        <p className={ContentListStyles.text}>{item.category}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }

            </react.Fragment >
        )
    }
}

export default ContentsList