import React from "react";

export default function Newpatient() {
    return (
        <div>
            <label htmlFor="id" className="text-sm mt-6"> User Id </label>
            <input type="text" name="id" id="id"  className="border-2 rounded-lg h-8 w-80 mt-2"/>

            <label htmlFor="is_available" className="text-sm mt-6"> Is Available </label>
            <input type="text" name="is_available" id="is_available"  className="border-2 rounded-lg h-8 w-80 mt-2"/>

            <label htmlFor="is_treated" className="text-sm mt-6">Is treated </label>
            <input type="text" name="is_treated" id="is_treated"  className="border-2 rounded-lg h-8 w-80 mt-2"/>

            <label htmlFor="problem" className="text-sm mt-6"> Problem </label>
            <textarea name="problem" id="problem" cols="30" rows="10" className="border-2 rounded-lg mb-6 mt-2"> Write the problem</textarea>
        </div>
    )
}