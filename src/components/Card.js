import "./Card.css";

function Card(props){
    const classes = 'card ' + props.className;
     return <div className={classes}>{props.children}</div>;
    //props.children is a builtin prop and will always contain the Components that are between the opening and closing card tags
}

export default Card;