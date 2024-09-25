function RepoDesc({ repoName, repoDesc }) {
    return (
        <>
            <h1 className="text-xl font-bold text-on-surface text-center">{ repoName }</h1>
            <p className="text-center">{ repoDesc }</p>
        </>
    );
}


export default RepoDesc;
