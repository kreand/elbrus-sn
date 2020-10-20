import React from 'react';
import {Select} from 'antd';
import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';

const {Option} = Select;
const ChangeGroupAndRoleComponent = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{marginTop: '3em'}}>
                <h2>Изменить роль</h2>
                <form>
                    <Select placeholder={'Выбрать роль'}>
                        <Option value={'guest'}>guest</Option>
                        <Option value={'student'}>student</Option>
                        <Option value={'teacher'}>teacher</Option>
                    </Select>
                    <ButtonComponent justify={'left'} title={'Изменить'}/>
                </form>
            </div>
            <div style={{marginTop: '3em'}}>
                <h2>Изменить группу</h2>
                <form>
                    <InputComponent name="group" placeholder="Изменить группу"  justify={'left'} span={12}/>
                    <ButtonComponent justify={'left'} title={'Изменить'}/>
                </form>
            </div>
        </div>
    );
};

export default ChangeGroupAndRoleComponent;