
import Name from "./Name"
import NavLinks from "./NavLinks"
import Picture from "./Picture"


const Navigation = () => {


  return (
    <div className={`h-full bg-secondary rounded-r-lg text-primary p-4`}>
      {/* My picture */}
      <Picture />
      {/* name */}
      <Name />
      {/* Navigation Links */}
      <NavLinks />
    </div>
  )
}

export default Navigation
