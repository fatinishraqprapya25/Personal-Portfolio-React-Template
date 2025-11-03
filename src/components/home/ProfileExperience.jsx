export default function ProfileExperience({ heading, content }) {
    return <div className="mb-6 relative">

        <div className="flex justify-end space-x-4">
            <h3 className="text-xl font-semibold mb-2">{heading}</h3>
            <div className="border-white border-2 w-5 rounded-full h-5 flex justify-center items-center">
                <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
        </div>

        <p className="text-gray-300 text-sm mt-1 pr-8">{content}</p>
    </div>
}