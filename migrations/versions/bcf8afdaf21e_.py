"""empty message

Revision ID: bcf8afdaf21e
Revises: e8d1ca60c45f
Create Date: 2018-08-01 21:12:03.527948

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bcf8afdaf21e'
down_revision = 'e8d1ca60c45f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('page', sa.Column('seo_desc', sa.Text(), nullable=True))
    op.add_column('page', sa.Column('seo_keywords', sa.Text(), nullable=True))
    op.add_column('page', sa.Column('seo_tile', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('page', 'seo_tile')
    op.drop_column('page', 'seo_keywords')
    op.drop_column('page', 'seo_desc')
    # ### end Alembic commands ###