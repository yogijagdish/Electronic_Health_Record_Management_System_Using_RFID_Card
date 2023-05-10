import React from "react";

export default function AddMoreInformation() {
    return(
        <div className="grid place-content-center">
        <h1 className="text-2xl mt-4 bg-green-500"> Doctor Information </h1>
        {/* Name */}
        <label htmlFor="Name" className="text-sm mt-6"> Name </label>
        <input type="text" name="name" id="name" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* specialization */}
        <label htmlFor="specialization" className="text-sm mt-6">Specialization</label>
        <input type="text" name="specialization" id="specialization" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* hospital name */}
        <label htmlFor="hospital" className="text-sm mt-6"> Hospital </label>
        <input type="text" name="hospital" id="hospital" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        <h1 className="text-2xl mt-4 bg-green-500"> Contact Information of the doctor </h1>

        {/* doctor name */}
        <label htmlFor="docor" className="text-sm mt-6"> Doctor </label>
        <input type="text" name="doctor" id="doctor" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* doctor phone number */}
        <label htmlFor="phone no" className="text-sm mt-6">Phone Number</label>
        <input type="text" name="phone" id="phone" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* doctor permanent address */}
        <label htmlFor="permanet address" className="text-sm mt-6">Permanent Address</label>
        <input type="text" name="permanent address" id="permanent address" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* doctor current address */}
        <label htmlFor="current address" className="text-sm mt-6">Current Address</label>
        <input type="text" name="current address" id="current address" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* Education Information of the doctor */}

        <h1 className="text-2xl mt-4 bg-green-500"> Education of the Doctor</h1>

        {/* doctor name */}
        <label htmlFor="docto " className="text-sm mt-6"> Doctor</label>
        <input type="text" name="doctor" id="doctor" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* bachelor college of the doctor */}
        <label htmlFor="bachelor" className="text-sm mt-6">Bachelor</label>
        <input type="text" name="bachelor" id="bachelor" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* master degree of the doctor */}
        <label htmlFor="master" className="text-sm mt-6">Master</label>
        <input type="text" name="master" id="master" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* phd if done by the doctor */}
        <label htmlFor="phd" className="text-sm mt-6">PHD</label>
        <input type="text" name="phd" id="phd" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* Information regarding the hospital in which doctor works other than this */}

        <h1 className="text-2xl mt-4 bg-green-500"> Information of other Workplace</h1>

        {/* name of the hospital if the doctor works here */}
        <label htmlFor="hospital name" className="text-sm mt-6"> Hospital Name </label>
        <input type="text" name="hospital name" id="hospital_name" className="border-2 rounded-lg h-8 w-80 mt-2"/>

        {/* location of the hospital */}
        <label htmlFor="location" className="text-sm mt-6">Location </label>
        <input type="text" name="location" id=";location" className="border-2 rounded-lg h-8 w-80 mt-2"/>
        </div>
    )
}