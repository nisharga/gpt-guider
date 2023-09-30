import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">{title}</h1>
        </div>
    );
};
Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;