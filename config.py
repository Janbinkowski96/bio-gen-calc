# config.py


class Config(object):
    """
    Common configurations
    """


class DevelopmentConfig(Config):
    """
    Development configurations
    """

    DEBUG = True
    SQLALCHEMY_ECHO = True
    MINIFY_PAGE = True


class ProductionConfig(Config):
    """
    Production configurations
    """

    DEBUG = False
    MINIFY_PAGE = True


app_config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}
