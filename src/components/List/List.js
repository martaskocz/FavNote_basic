import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({items}) => (
    <>
        { items.length ?
            (<ul className={styles.wrapper}>
                {items.map((item) => (
                        <ListItem key={item.name} {...item}/>
                ))}
            </ul>)
            :
            (<h3 className={styles.noItems}>We are waiting for new items to be added :)</h3>)
        }
    </>
);

export default List;