import React from "react";

function SushiWallet({ onAddCredit, onChangeHandle, formValue }) {

return (
    <div>
        <form onSubmit={onAddCredit}>
            <label>Budget</label>
            <input
            type='number'
            name='credit'
            value={formValue}
            onChange={onChangeHandle}
            />
            <button>Add Credit</button>
        </form>
    </div>    
)
}

export default SushiWallet;