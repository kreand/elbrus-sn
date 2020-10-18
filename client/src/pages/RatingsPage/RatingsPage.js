import React, {useEffect} from 'react';
import InputComponent from '../../components/Input/InputComponent';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsersAC} from '../../redux/actionCreators/ratingAC';

const RatingsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersAC());
    }, [dispatch]);
    const students = useSelector(state => state.rating.allUsers);
    return (
        <div>
            <InputComponent size="large" placeholder="Search of student" justify="left" span="7" offset="4"/>
            <ul>
                {students.length && students.map((el) => {
                        return <li key={el._id}> {el.name}</li>;
                    }
                )}
            </ul>
        </div>
    );
};

export default RatingsPage;
