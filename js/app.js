var myNews = [
    {
        author: 'Саша',
        text: 'Текст от саши',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis distinctio earum, eius eos eum facere fuga ipsam ipsum iure molestiae, nulla omnis provident quaerat quisquam quod ratione veniam? Neque, rerum, saepe! A aliquam at, autem dignissimos dolorem ex magni nobis odit quia reiciendis sapiente vel veniam. Ab assumenda autem cum dicta ea error eveniet ipsam magni nam nemo neque numquam officiis provident, quam qui quidem rem repudiandae sapiente sed tempora vel voluptatem voluptatibus? Aperiam facere fuga magnam porro qui quibusdam rerum sed velit vero. Assumenda deleniti dolor esse incidunt ipsa laboriosam odio. Consectetur dolor dolore obcaecati quasi ut veritatis.'
    },
    {
        author: 'Петя',
        text: 'Текст от пети',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum iusto quisquam! Accusantium autem minima nihil quos ratione repellat, sequi?'
    },
    {
        author: 'Вася',
        text: 'Текст от васи',
        bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aut deleniti exercitationem expedita libero magni molestiae, necessitatibus obcaecati praesentium provident repudiandae tenetur ullam veniam voluptate. Architecto delectus facere impedit magni provident. Expedita laboriosam, maiores odit optio perspiciatis quas vel.'
    }
];


var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
        return {
            visible: false
        };
    },
    readmoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    render: function() {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        return (
            <div className="article">
                <p className="news__author">{author}</p>
                <p className="news__text">{text}</p>
                <a
                    href="#"
                    onClick={this.readmoreClick}
                    className={"news__readmore " + (visible ? 'none' : '')}
                >
                    Подробнее
                </a>
                <p className={"news__big-text " + (visible ? '' : 'none')}>{bigText}</p>
            </div>
        );
    }
});


var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    render: function() {
        var data = this.props.data,
            newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                );
            });
        } else {
            newsTemplate = <p>Новостей нет</p>;
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong
                    onClick={this.incrimentCount}
                    className={'news__count ' + (data.length > 0 ? '' : 'none')}
                >
                    Всего новостей: {data.length}
                </strong>
            </div>
        );
    }
});


var Add = React.createClass({
    getInitialState: function() {
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    },
    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onBtnClickHandler: function(e) {
        e.preventDefault();
        var inputTxt = ReactDOM.findDOMNode(this.refs.author).value;
        var textareaTxt = ReactDOM.findDOMNode(this.refs.text).value;

        alert(inputTxt + '\n' + textareaTxt);
    },
    onCheckRuleClick: function() {
        this.setState({
            agreeNotChecked: !this.state.agreeNotChecked
        });
    },
    onFieldChange: function(fieldName, e) {    
        var next = {};
        if (e.target.value.trim().length > 0) {
            next[fieldName] = false;
            this.setState(next);
        } else {
            next[fieldName] = true;
            this.setState(next);
        }
    },
    render: function() {
        var btnIsDisabled = this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty;

        return (
            <form className="add cf">
                <input
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                    ref='author'
                    type="text"
                    className="add__author"
                    defaultValue=""
                    placeholder="Ваше имя"
                />

                <textarea
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                    className="add__text"
                    defaultValue=""
                    placeholder="Текст новости"
                    ref="text"
                ></textarea>

                <label className="add__checkrule">
                    <input
                        onChange={this.onCheckRuleClick}
                        type="checkbox"
                        ref="checkrule"
                    />
                    Я согласен с правилами
                </label>
                <button
                    className="add__btn"
                    type="button"
                    onClick={this.onBtnClickHandler}
                    ref="alert__button"
                    disabled={btnIsDisabled}
                >
                    Отправить
                </button>
            </form>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <Add />
                <News data={myNews} /> {/* */}
            </div>
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('root')
);