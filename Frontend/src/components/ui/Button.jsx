function Button({ children, className, ...props }) {
    return (
      <button className={`px-4 py-2 rounded font-medium cursor-pointer ${className}`} {...props}>
        {children}
      </button>
    )
}

export default Button