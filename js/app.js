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
    render: function() {
        var data = this.props.data;
        var newsTemplate;

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
                <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News data={myNews} /> {/* */}
            </div>
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('root')
);