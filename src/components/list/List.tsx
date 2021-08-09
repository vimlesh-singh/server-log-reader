import classes from './List.module.css';
export interface ListProps {
    data: { name: string, count: number }[],
    item: string
}

const List: React.FC<ListProps> = (props) => {
    const handleChange = (e: any) => {
        console.log(e);
    }
    return (<div data-testid='list-component' className={classes.card}>
        <h2>{props.item}</h2>
        <ul className={classes.list}>
            {props.data.map(item =>
                <li key={item.name} className={classes.listItem}><span>{item.name} &nbsp;</span><span>{item.count} {props.item}</span> </li>
            )}
        </ul>
    </div>);
}

export default List;