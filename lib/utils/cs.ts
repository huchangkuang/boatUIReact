function cs(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default cs;